
// const fs = require("fs");

// console.log("Start");

// const data = fs.readFileSync("sample.txt", "utf8");
// console.log(data);

// console.log("End");


// const fs = require("fs");

// console.log("Start");

// fs.readFile("sample.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// console.log("End");



// const { open } = require('node:fs/promises');

// (async () => {
//   const file = await open('sample.txt');

//   for await (const line of file.readLines()) {
//     console.log(line);
//   }
// })();


// const fs = require("fs");

// console.log("Start");

// fs.writeFile("sample.txt", "Hello Node.js!", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File written successfully");
// });

// console.log("End");



// const fs = require('fs');

// console.log('Start');

// fs.writeFileSync("sample.txt","Hello Node.js!", (err) => {
//     if(err) {
//       console.log(err);
//       return;
//     }
//     console.log("File written successfully");
// });

// console.log("End");

// const fs = require('fs');

// fs.rename("target.txt","sample.txt",(err) =>{
//   if(err){
//     console.log(err);
//     return ;
//   }
//   console.log("File copied successfully");
// })


// const fs = require("fs");

// fs.mkdir("myFolder", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Directory created successfully");
// });



// fs.readdir("./", (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(files);
// });



// fs.rmdir("myFolder", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log("Directory removed successfully");
// });

// const fs = require("fs");
// const writeStrem = fs.createWriteStream("sample.txt");
// const readStream = fs.createReadStream("sample.txt", "utf8");


// writeStrem.write("Hii,my name is dinesh");

// readStream.on("data", (chunk) => {
//     console.log(chunk);
// });

// readStream.on("end", () => {
//     console.log("File reading completed");
// });


// const data = fs.readFileSync("user.json","utf8");

// const result = JSON.parse(data);// its convert the object to string form

// console.log(result);


// const fs = require('fs');

// const user = {
//   name: "Dinesh",
//   age:20,
//   city:"surat"
// };

// fs.writeFileSync(
//   "user.json",
//   JSON.stringify(user,2,2)
// )

// console.log("Json File Craete");


// const fs = require("fs");

// const csvData = `name,age,city
// Dinesh,20,Surat
// Rahul,22,Mumbai
// Priya,21,Delhi
// Dikshit,21,Surat`;

// fs.writeFileSync("users.csv", csvData);

// console.log("CSV file created successfully");

