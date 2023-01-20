import { React, useState } from "react";

function BookReview({ id, book }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reviews, setReview] = useState(book.reviews);

  const handleSubmit = async () => {
    const review = { title, body };
    setReview([...reviews, review]);
    const book = { reviews };
    console.log(book);
    const response = await fetch(`/api/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="flex w-full flex-col items-center">
      <label>Review Title</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
      <label>Review Body</label>
      <input type="text" onChange={(e) => setBody(e.target.value)}></input>
      <button onClick={(e) => handleSubmit()}>Submit</button>
    </div>
  );
}

export default BookReview;
