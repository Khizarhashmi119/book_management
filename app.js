const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/bookDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const bookSchema = new mongoose.Schema({
  bookID: {
    type: String,
    required: true
  },
  bookTitle: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("book", bookSchema);

app.route("/").get((req, res) => {
  Book.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("home", {
        books: result
      });
    }
  });
});

app
  .route("/insert")
  .get((req, res) => {
    res.render("insert");
  })
  .post((req, res) => {
    const bookID = req.body.bookID;
    const bookTitle = req.body.bookTitle;
    const newBook = new Book({
      bookID: bookID,
      bookTitle: bookTitle
    });
    newBook.save().then(() => {
      console.log("New book has been added.");
      res.redirect("/");
    });
  });

app
  .route("/delete")
  .get((req, res) => {
    res.render("delete");
  })
  .post((req, res) => {
    const bookID = req.body.bookID;
    Book.findOneAndDelete({ bookID: bookID }, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully deleted book");
        res.redirect("/");
      }
    });
  });

app.listen(3000, () => {
  console.log("Server has been started at port no. 3000");
});
