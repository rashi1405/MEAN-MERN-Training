const express = require('express');
const {
  getBook,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

const { verifyToken } = require("../middlewares/auth-verify");

const router = express.Router();
const book = require('../models/book');

router.get('/', verifyToken, getBook);

router.get('/:id', verifyToken, getBookById);

router.post('/', verifyToken, addBook);

router.patch('/:id', verifyToken, updateBook);

router.delete('/:id', verifyToken, deleteBook);

module.exports = router;
