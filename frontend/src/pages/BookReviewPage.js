import React from "react";
import { useNavigate } from "react-router-dom";

import BookReview from "../components/BookReview";

function BookReviewPage({ current }) {
  const navigate = useNavigate();
  const book = current;
  return (
    <div>
      <p>{book.title}</p>
      <p>Author: {book.author}</p>
      <p>Cost: ${book.cost}</p>
      <div>
        Tags:
        {book.tags.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        <p>Reviews:</p>
        {book.reviews.map((item) => (
          <div>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <div>
        <BookReview id={book._id} book={book} />
      </div>
      <div>
        <button onClick={(e) => navigate("/")}>Home</button>
      </div>
    </div>
  );
}

export default BookReviewPage;
