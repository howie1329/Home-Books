import React from "react";
import { useNavigate } from "react-router-dom";

import BookReview from "../components/BookReview";

function BookReviewPage({ current }) {
  const navigate = useNavigate();
  const book = current;
  return (
    <div className="flex flex-col justify-center border-black border-2">
      <div className="flex gap-5">
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Cost: ${book.cost}</p>
      </div>
      <div className="flex gap-2">
        Tags:
        {book.tags.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div className="flex flex-col">
        <p>Reviews:</p>
        {book.reviews.map((item) => (
          <div className="flex flex-col">
            <p className="underline">{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <div className="flex border-black border-2">
        <BookReview id={book._id} book={book} />
      </div>
    </div>
  );
}

export default BookReviewPage;
