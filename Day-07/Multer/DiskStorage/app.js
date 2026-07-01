//for single file
const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();

if (!fs.existsSync("upload")) {
  fs.mkdirSync("upload");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "upload/"),
  filename: (req, file, cb) => {
    const suffix = Math.round(Math.random() * 1000);
    cb(null, suffix + "-" + file.originalname);
  },
});

const upload = multer({ storage:  Storage });

app.post("/upload", upload.single("image"), (req, res) => {

    console.log(req.file);

    res.send("File Uploaded Successfully");

});

app.listen(3000);