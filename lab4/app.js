//Name: Wenkang Su

const connection = require("./mongoConnection");
const todo = require("./todo");

async function main() {
  try{
    const createTask_1 = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log("First task: ");
    console.log(createTask_1);

    const createTask_2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    console.log("Second task: ");
    console.log(createTask_2);

    console.log("All tasks: ");
    const getTasks = await todo.getAllTasks();
    console.log(getTasks);


    console.log("Remove the first task ");
    console.log("Task ID is: " +getTasks[0]._id);
    const deleteIt = await todo.removeTask(getTasks[0]._id);
    
    console.log("Print the remaining tasks");
    const getTasks1 = await todo.getAllTasks();
    console.log(getTasks1);

    console.log("Complete the remaining tasks")
    const completedTask = await todo.getAllTasks(getTasks1);   
    for(i = 0; i < completedTask.length; i++) {
      finishedTask = await todo.completeTask(getTasks1[i]._id); 
      console.log(finishedTask);
    }
    
    try {
      return await todo.getTask(completedTask);
        } catch (err) {
          console.error(err);
       }
    }catch(e){
        console.log(e);
    }
    console.log("Finished");
    const db = await connection();
    await db.close();       
}

try{
  main();
  }catch(e){
    console.log(e)
}
