const User = require('../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const dotenv = require("dotenv").config()
async function getUser(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send('Error ' + err);
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send('Error ' + err);
  }
}

async function addUser(req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    user.password= req.body.password
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
}


async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const u1 = await user.delete();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
}
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  let newPassword = password.toString();

  //Hash password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({

    name,
    email,
    password: hashedPassword,
    
  });
  if(user){
    res.status(201).json({id:user.id,email:user.email})
}
else{
    res.status(400)
    throw new Error("User data is not valid");
}




})

//@desc LoginUser
//@route POST/student/login
//@access public
const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            name: user.name,
            email: user.email,
            id: user.id
            
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });
//@desc CuurentUser
//@route GET/student/current
//@access private

const CurrentUser = asyncHandler(async(req,res)=>{
res.json(req.user);
});




module.exports = { getUser, getUserById, addUser, updateUser , deleteUser,CurrentUser,LoginUser,registerUser};
