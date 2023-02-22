const Book = require('../models/book');

async function getBook(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.send('Error ' + err);
  }
}

async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.send('Error ' + err);
  }
}

async function addBook(req, res) {
  const book = new Book({
    name: req.body.name,
    pages: req.body.pages,
    cost: req.body.cost,
  });

  try {
    const u1 = await book.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
}

async function updateBook(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    book.name = req.body.name;
    book.pages = req.body.pages;
    book.cost = req.body.cost;
    const u1 = await book.save();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
}


async function deleteBook(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    const u1 = await book.delete();
    res.json(u1);
  } catch (err) {
    res.send('Error');
  }
}

module.exports = { getBook, getBookById, addBook, updateBook , deleteBook };
