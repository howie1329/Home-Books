import { Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { setCurrentBook } from "../app/features/books/bookSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

/*
Component for list books found in database
Needs to add search by tag ability 
*/

function BookListing({ title, tagFilter }) {
  const dispatch = useDispatch();

  //Book sent from database
  const [books, setBooks] = useState(null);

  const navigate = useNavigate();

  //Get Books from database
  const getBooks = async () => {
    const response = await axios.get(`/api/books/t/${tagFilter}`)
    if (response.status === 200) {
      setBooks(response.data);
    }
  };

  const onClick = (item) => {
    console.log(item)
    dispatch(setCurrentBook(item));
    navigate("/bookreview");
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="flex flex-col border-2 border-black rounded-xl w-72 items-center p-2">
      <Typography variant="h6" className="underline">
        {title}
      </Typography>
      <ul>
        {books &&
          books.map((book) => (
            <li
              key={book._id}
              className="flex underline justify-evenly"
              onClick={(e) => onClick(book)}
            >
              <p className="flex flex-col gap-2">{book.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BookListing;

/* 
filter for tags

    <ul>
        {books.map((item) => {
          if (item.tags.includes() == "trending") return <li>{item.title}</li>;
        })}
    </ul>
*/
