const express = require("express");
const connectDB = require("./db");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

connectDB();

app.use(require("./routes/home"));
app.use(require("./routes/insert"));
app.use(require("./routes/delete"));

app.listen(PORT, () =>
  console.log(`Server is up and running at port no. ${PORT}...`)
);
