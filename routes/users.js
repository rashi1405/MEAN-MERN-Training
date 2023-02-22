const express = require('express');

const {
  getUser,
  getUserById,
  deleteUser,
  addUser,
  updateUser,
} = require('../controllers/users');
const { validateUser, validate } = require('../middlewares/validator');

const router = express.Router();
const User = require('../models/user');

router.get('/', getUser);

router.get('/:id', getUserById);

router.post('/', validateUser, validate, addUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;
