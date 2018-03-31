// Name: Wenkang Su
// I pledge my honor that I have abided by the Stevens Honor System.

const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {
    getFileAsString: async function (path) {   
        if(!path) throw "No path provided";
        if (typeof path !== "string") throw "The path is not a string";
        let file_str = await fs.readFileAsync(path,"utf-8");
        return file_str;
    },

    getFileAsJSON: async function (path) {
        if(!path) throw "No path provided";
        if (typeof path !== "string") throw "The path is not a string";
        let file_str = await fs.readFileAsync(path,"utf-8");
        let file_json = JSON.parse(file_str);
        return file_json;
    },

    saveStringToFile: async function(path, text){
        if(!path) throw "No path provided";
        if (typeof path !== "string") throw "The path is not a string";
        if(!text) throw "No text provided";
        if (typeof text !== "string") throw "The text is not a string";
        let str_file = await fs.writeFileAsync(path,text);
        return str_file;
    },

    saveJSONToFile: async function(path, obj){
        if(!path) throw "No path provided";
        if (typeof path !== "string") throw "The path is not a string";
        if(!obj) throw "No object provided";
        if (typeof obj !== "object") throw "The object is not an object";     
        let json_file = await fs.writeFileAsync(path, JSON.stringify(obj, null, 4));
        return json_file;
    }
}