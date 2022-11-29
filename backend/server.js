require("dotenv").config();
//Imports
const express = require("express");
const mongoose = require("mongoose");

//Express App
const app = express();

//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes

mongoose
  .connect(process.env.PORT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to Database... Listening on port...",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
