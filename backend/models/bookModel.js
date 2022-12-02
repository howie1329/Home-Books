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
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    reviews: {
      type: [Object],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);

/* 
Need to add tags type [strings] example [hot,trending,new]
add genre to model example [fantasy, nonfiction, fiction] 
Create Model for reviews [title, body] both strings
*/
