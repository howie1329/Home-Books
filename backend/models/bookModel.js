const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    book_id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
    },
    reviews: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
