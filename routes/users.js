const express = require('express');
const{
  addUser,
  deleteUser,
  getUserById,
  getUser,
  updateUser,
} = require('../controllers/users');

const { validateUser, validate } = require('../middlewares/validator');

const router = express.Router();
const User = require('../models/user');

router.get('/', getUser);

router.post('/',validateUser, validate,  addUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;
