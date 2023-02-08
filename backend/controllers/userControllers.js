const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") 
const mongoose = require("mongoose");


//get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({});
  res.status(200).json(users);
};

//get a single user by ID
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.find({ user_id: id });
  res.status(200).json(user);
};

const getUsername = async (req, res) => {
  const { name } = req.params;
  try {
    const user = await User.findOne({ username: name });
    res.status(200).json(user);
  } catch (error) {
    const user = {name:"Howard"}
    console.log("here")
    res.status(200).json(user)
  }
};

const generateToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

const login = async(req, res) =>{
  const {username, password} = req.body

  const user = await User.findOne({username})
  const token = generateToken(user._id)
  if (user && bcrypt.compare(password,user.password)){
    res.status(200).json({user,token})
  }else{
    res.status(401) 
  }
}

//create a user
const createUser = async (req, res) => {
  let { user_id, fullname, username, password, role } = req.body;
  bcrypt.hash(password,10,async (err,hashedPassword)  => {
    password = hashedPassword
    try {
      const user = await User.create({
        user_id,
        fullname,
        username,
        password,
        role,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: err });
    }
  })  
};

//delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOneAndDelete({ user_id: id });

  res.status(200).json(user);
};

module.exports = {
  deleteUser,
  createUser,
  getUser,
  getUsers,
  getUsername,
  login
};
