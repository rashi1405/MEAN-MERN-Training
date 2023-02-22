const express = require('express');
const {
  getBook,
  deleteBook,
  getBookById,
  addBook,
  updateBook,
} = require('../controllers/books');

const router = express.Router();
const book = require('../models/book');

router.get('/', getBook);

router.get('/:id', getBookById);

router.post('/', addBook);

router.patch('/:id', updateBook);

router.delete('/:id', deleteBook);

module.exports = router;
