const express = require("express");
const {
  getUsers,
  getUser,
  deleteUser,
  createUser,
} = require("../controllers/userControllers");

const router = express.Router();

//get all users
router.get("/", getUsers);

//get single user
router.get("/:id", getUser);

//create user
router.post("/", createUser);

//delete user
router.post("/:id", deleteUser);

module.exports = router;
