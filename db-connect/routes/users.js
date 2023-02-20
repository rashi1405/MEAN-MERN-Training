const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send('Error ' + err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send('Error ' + err);
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.sub = req.body.sub;
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
});

module.exports = router;
