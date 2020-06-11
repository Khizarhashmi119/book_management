const express = require("express");
const routers = express.Router();

const Book = require("../models/Book");

routers.route("/").get(async (req, res) => {
  try {
    const books = await Book.find({});

    res.render("home", {
      books: books,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = routers;
