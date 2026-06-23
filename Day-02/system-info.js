const dotenv = require("dotenv");
dotenv.config()
//Task:-01
// const fs = require('fs');
// const os = require('os');
// const path = require('path');
// const data = fs.readFileSync('sample.txt','utf-8');

// console.log(data);

// console.log('Architacture:',os.arch());

// console.log('Platform:',os.type());

// console.log('Dirname:-',__dirname);


// console.log('File name:-',path.basename(__filename));
// console.log("Environment:", process.env.NODE_ENV);


//Task:-02

// const fs = require('fs');

// const filepath="./user.json";

// function loadTasks() {
//     if(!fs.existsSync(filepath)){
//         return [];
//     }

//     const data =fs.readFileSync(filepath,"utf8");
//     return data? JSON.parse(data) :[];
//     // const data = fs.readFileSync(filePath, "utf8");
// }

// function saveTasks(tasks){
//     fs.writeFileSync(filepath,JSON.stringify(tasks,null,2));
// }


// const command = process.argv[2];
// const value = process.argv[3];

// const tasks = loadTasks();

// if (command === "add") {
//     const newTask = {
//         id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
//         text: value
//     };

//     tasks.push(newTask);
//     saveTasks(tasks);

//     console.log("Task added:" , newTask);
// }

// else if (command === "list") {
//     console.log(tasks);
// }

// else if (command === "delete") {
//     const id = Number(value);

//     const result = tasks.filter(task => task.id !== id);
//     saveTasks(result);

//     console.log(`Task ${id} deleted`);
// }

// else {
//     console.log(`
// Usage:
// node app.js add "Task Name"
// node app.js list
// node app.js delete <id>
// `);
// }

//Task-03//Ai//do try for better understanding
const fs = require("fs");

const csvData = fs.readFileSync("users.csv", "utf8");

const lines = csvData.trim().split("\n");

const headers = lines[0].split(",");

const result = [];

for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    console.log(values);

    const obj = {};

    headers.forEach((header, index) => {
        obj[header] = values[index];
    });

    result.push(obj);
}

fs.writeFileSync(
    "user.json",
    JSON.stringify(result, null, 2)
);

console.log("CSV converted to JSON successfully!");