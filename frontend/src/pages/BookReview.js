import React from "react";

function BookReview({ current }) {
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
        <p>{book.reviews}</p>
      </div>
    </div>
  );
}

export default BookReview;
