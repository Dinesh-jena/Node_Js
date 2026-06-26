const express = require('express');
const authRoutes = require('./routes/user.routes');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});

app.use(express.static("public"));

app.use('/routes',authRoutes);

module.exports=app;