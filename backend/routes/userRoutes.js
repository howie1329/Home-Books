const express = require("express");
const {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  getUsername,
  login,
  tokenCheck,
} = require("../controllers/userControllers");

const router = express.Router();

//get all users
router.get("/", getUsers);

//Get user by username
router.get("/user/:name", getUsername);

//get single user
router.get("/:id", getUser);

//Check Token
router.get("/token",tokenCheck)

//create user
router.post("/", createUser);

//Login User
router.post("/login",login)

//delete user
router.delete("/:id", deleteUser);

module.exports = router;
