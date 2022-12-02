require("dotenv").config();
//Imports
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

//Express App
const app = express();

//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONG_URL)
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
