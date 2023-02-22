const express = require('express');
const{
  addUser,
  deleteUser,
  getUserById,
  getUser,
  updateUser,
  registerUser,
  LoginUser,
  CurrentUser
} = require('../controllers/users');

const  validateToken = require("../middlewares/validateTokenHandler")

const { validateUser, validate } = require('../middlewares/validator');

const router = express.Router();
const User = require('../models/user');

router.get('/', getUser);

router.post('/',validateUser, validate,  addUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

router.post("/register", registerUser);

router.post("/login", LoginUser);

router.get("/current", validateToken,CurrentUser);


module.exports = router;
