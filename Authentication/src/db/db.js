const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose=require('mongoose');

function connectToDB(){

    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connect to Db.")
    })
    .catch((err)=>{
        console.log(err);
    });
} 

module.exports=connectToDB;