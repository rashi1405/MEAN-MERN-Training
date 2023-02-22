const express = require('express');
const {
  getBook,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

const router = express.Router();
const book = require('../models/book');

router.get('/', getBook);

router.get('/:id', getBookById);

router.post('/', addBook);

router.patch('/:id', updateBook);

router.delete('/:id', deleteUser);

module.exports = router;
