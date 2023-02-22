const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  pages: {
    type: Number,
  },
  cost: {
    type: Number,
  },
});

module.exports = mongoose.model('Book', bookSchema);
