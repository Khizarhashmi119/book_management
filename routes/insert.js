const express = require("express");
const routers = express.Router();

const Book = require("../models/Book");

routers
  .route("/insert")
  .get((req, res) => {
    res.render("insert");
  })
  .post(async (req, res) => {
    const { bookID, bookTitle } = req.body;
    try {
      const newBook = new Book({
        bookID: bookID,
        bookTitle: bookTitle,
      });

      await newBook.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect("/");
  });

module.exports = routers;
