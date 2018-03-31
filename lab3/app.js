// Name: Wenkang Su
// I pledge my honor that I have abided by the Stevens Honor System.

const textMetrics = require("./textMetrics.js");
const fileData = require("./fileData.js");

const blueBird = require("bluebird");
const Promise = blueBird.Promise;
const fs = blueBird.promisifyAll(require("fs"));

async function app(i) {
    const checkExist = fs.existsSync(`./chapter${i}.result.json`);
    if(checkExist){
        try {
            const file_json = await fileData.getFileAsJSON(`./chapter${i}.result.json`);
            console.log(file_json);
        } catch (e) {
            console.log(e);
        }     
    } else {
        try {
            let file_str = await fileData.getFileAsString(`./chapter${i}.txt`);
            file_str = textMetrics.simplify(file_str);
            await fileData.saveStringToFile(`chapter${i}.debug.txt`, file_str);

            let metric_result = textMetrics.createMetrics(file_str);
            await fileData.saveJSONToFile(`chapter${i}.result.json`, metric_result);
            console.log(`chapter${i} metric results :`);
            console.log(metric_result);
        } catch (e) {
            console.log(e);   
        }  
    }
}

// Test 3 cases
async function main() {
    for (let i = 1; i < 4; i++) {
    app(i);
    console.log(`Test for Chapter ${i} done.`);
    }
}

main();