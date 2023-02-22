const User = require('../models/user');
const jwt = require('jsonwebtoken');

TOKEN_KEY = "KfiAJHr92JKJ7Z-ao6V3PikoYlEeujsW2QCI_YgtJ8k";

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
    user.password = req.body.password;
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

async function login(req, res) {
  const user = await User.find({ email: req.body.email });

  if (!user)
    return res.status(400).send("Incorrect Email-ID")

  const password = req.body.password.toString();
  const validatePassword = await password.localeCompare(user.password);

  if (!validatePassword)
    return res.status(400).send("Invalid Password");

  const token = jwt.sign({ _id: user._id }, TOKEN_KEY, { "expiresIn": 600 });
  res.header("auth-token", token).send({ auth: true, token: token });

}

module.exports = { getUser, getUserById, addUser, updateUser, deleteUser, login };
