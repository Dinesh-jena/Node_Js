const express = require('express');
const todoRouter = require('../src/Router/todo-routes')
const app = express();

app.use(express.json());
app.use('/todo',todoRouter);


module.exports=app;
