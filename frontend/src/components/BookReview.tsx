import { TextField, Button, Card } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

import { bookInterface } from "../interfaces/bookInterface";

function BookReview({ id, book}:{id:String, book:bookInterface}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reviews, setReview] = useState(book.reviews);

  const handleSubmit = async () => {
    const review = { title, body };
    //@ts-ignore
    setReview([...reviews, review]);
    const book = { reviews };
    console.log(book);
    const response = await axios.patch(`/api/books/${id}`,book)
  };
  return (
    <Card className="flex flex-col items-center gap-2 p-2">
      <TextField
        label="Review Title"
        variant="standard"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        variant="standard"
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        className="w-64"
        variant="contained"
        onClick={(e) => handleSubmit()}
      >
        Submit
      </Button>
    </Card>
  );
}

export default BookReview;
