import React from "react";

import { TextField, Button } from "@mui/material";
//Book Form for updating
function UpdateBook({
  details,
  title,
  author,
  pages,
  id,
  setTitle,
  setAuthor,
  setPages,
  setActive,
  getBooks,
}) {
  //Need to add validation and error response

  //Submit function... sending book data back to database
  const handleSubmit = async () => {
    const book = { title, author, pages };
    const response = await fetch("/api/books/" + id, {
      method: "PATCH",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setActive(false);
    getBooks();
  };
  return (
    <div>
      <div className={details}>
        <p>Update Your Book</p>
        <div className="flex flex-col">
          <TextField
            label="Title"
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Author"
            variant="standard"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            label="Pages"
            variant="standard"
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={(e) => handleSubmit()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default UpdateBook;
