const express = require("express");
const routers = express.Router();

const Book = require("../models/Book");

routers
  .route("/delete")
  .get((req, res) => {
    res.render("delete");
  })
  .post(async (req, res) => {
    const { bookID } = req.body;

    try {
      await Book.findOneAndDelete({ bookID: bookID });
    } catch (err) {
      console.log(err);
    }

    res.redirect("/");
  });

module.exports = routers;
