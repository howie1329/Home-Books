const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookControllers");

const router = express.Router();

//Get all books
router.get("/", getBooks);

//Get single book
router.get("/:id", getBook);

//Create a new Book
router.post("/", createBook);

//Delete a book
router.delete("/:id", deleteBook);

//Update a book
router.patch("/:id", updateBook);

module.exports = router;