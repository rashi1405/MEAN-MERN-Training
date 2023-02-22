const express = require('express');
const{
  addUser,
  deleteUser,
  getUserById,
  getUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();
const User = require('../models/user');

router.get('/', getUser);

router.post('/', addUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;
