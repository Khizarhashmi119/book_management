const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookID: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
});

module.exports = Book = mongoose.model("book", bookSchema);
