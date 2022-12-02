const User = require("../models/userModel");
const mongoose = require("mongoose");

//get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({});
  res.status(200).json(users);
};

//get a single user
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.find({ user_id: id });
  res.status(200).json(user);
};

//create a user
const createUser = async (req, res) => {
  const { user_id, username, password, role } = req.body;

  try {
    const user = await User.create({
      user_id,
      username,
      password,
      role,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOneAndDelete({ user_id: id });

  res.status(200).json(user);
};

module.exports = { deleteUser, createUser, getUser, getUsers };
