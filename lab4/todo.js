//Name: Wenkang Su
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
let uuid = require("uuid");

module.exports = {
  async createTask(title, description) {
    if(!title) throw "No title provided.";
    else if(!description) throw "No description provided";
    else {
        let myCollections = await todoItems();
        let id = uuid.v1();
        let newTasks={
               _id : id,
               title: title,
               description: description,
               "completed" : "false",
               "completedAt" : null
           };
       const insertNew = await myCollections.insertOne(newTasks);
       if (insertNew.insertedCount === 0) throw "Can't add task";
       const newId = insertNew.insertedId;
       const tasks = await this.getTask(newId);
       return tasks;
    }    
  },
  
    async getTask(id) {
        if (!id) throw "No ID provided.";      
        const my_Task = await todoItems();
        const task = await my_Task.findOne({ _id: id });
        if (task === null) throw "Can't find the task";  
        return task; 
    },

    async getAllTasks() {
        const all_Tasks = await todoItems();
        const tasks = await all_Tasks.find({}).toArray();
        return tasks;
    },

    async  completeTask(taskId) {
      if(!taskId) throw "No ID provided.";
      let dateTime= new Date();
      let currentDateTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
      let completedTask = await todoItems();
      const updateInfo = await completedTask.updateOne({ _id: taskId }, {$set:{'completed' : true,'completedAt' :currentDateTime}});
      if (updateInfo.modifiedCount === 0) throw "Can't update todo";
      return await this.getTask(taskId);  
  },

    async removeTask(id) {
        if (!id) throw "No ID provided.";
        const my_Task = await todoItems();
        const delete_Info = await my_Task.removeOne({ _id: id });
        if((delete_Info.deleteCount)===0) throw `Can't delete the task ${id}`;   
    }
};
