const User = require('../models/user');

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
    user.password: req.body.password,
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

module.exports = { getUser, getUserById, addUser, updateUser , deleteUser};
