const Book = require("../models/bookModel");
const mongoose = require("mongoose");

//get all books
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({}).sort({ createAt: -1 });

  res.status(200).json(books);
};

// get a single book
const getBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No Such Book" });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "No Such Book" });
  }

  res.status(200).json(book);
};
// Create a single book
const createBook = async (req, res) => {
  const { book_id, title, author, pages, status } = req.body;
  try {
    const book = await Book.create({
      book_id,
      title,
      author,
      pages,
      status,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No Such Book" });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return res.status(404).json({ error: "No Such Book" });
  }

  res.status(200).json(book);
};

//update a book
const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No Such Book" });
  }

  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!book) {
    return res.status(404).json({ error: "No Such Book" });
  }

  res.status(200).json(book);
};

module.exports = { getBooks, getBook, createBook, deleteBook, updateBook };
