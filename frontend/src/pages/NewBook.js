import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Checkbox,
  InputLabel,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

import { useSelector } from "react-redux";

import axios from "axios";

//New Book Page
function NewBook() {
  const [book_id, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState([]);
  const [cost, setCost] = useState("");

  const navigate = useNavigate();

  const statusValues = [
    { value: "IN", label: "In" },
    { value: "Out", label: "Out" },
  ];

  //Submit function... sending book data back to database
  //Needs to add error handling
  const handleSubmit = async () => {
    const book = { book_id, title, author, pages, status, cost, tags };
    console.log(book);
    const response = axios.post("/api/books",book)
    navigate("/admin");
  };

  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="mt-14">
        <div className="flex flex-col gap-2">
          <TextField
            label="Book ID"
            variant="standard"
            onChange={(e) => setBookId(e.target.value)}
          />
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
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => setPages(e.target.value)}
          />
          <TextField
            select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusValues.map((options) => (
              <MenuItem key={options.value} value={options.value}>
                {options.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Cost"
            variant="standard"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => setCost(e.target.value)}
          />
          <div className="flex flex-row">
            <div className="flex items-center">
              <Checkbox
                label="hot"
                value="hot"
                onClick={(e) => setTags([...tags, e.target.value])}
              />
              <InputLabel>Hot</InputLabel>
            </div>
            <div className="flex items-center">
              <Checkbox
                label="trending"
                value="trending"
                onClick={(e) => setTags([...tags, e.target.value])}
              />
              <InputLabel>Trending</InputLabel>
            </div>
            <div className="flex items-center">
              <Checkbox
                label="nonfiction"
                value="nonfiction"
                onClick={(e) => setTags([...tags, e.target.value])}
              />
              <InputLabel>Non-Fiction</InputLabel>
            </div>
            <div className="flex items-center">
              <Checkbox
                label="fiction"
                value="Fiction"
                onClick={(e) => setTags([...tags, e.target.value])}
              />
              <InputLabel>Fiction</InputLabel>
            </div>
            <div className="flex items-center">
              <Checkbox
                label="fantasy"
                value="fantasy"
                onClick={(e) => setTags([...tags, e.target.value])}
              />
              <InputLabel>Fantasy</InputLabel>
            </div>
            <div className="flex items-center">
              <Checkbox
                label="romance"
                value="romance"
                onClick={(e) => setTags([...tags, e.target.value])}
              />
              <InputLabel>Romance</InputLabel>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly mt-2">
          <Button variant="contained" onClick={(e) => handleSubmit()}>
            Add Book
          </Button>
          <Button variant="contained" onClick={(e) => navigate("/admin")}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewBook;
