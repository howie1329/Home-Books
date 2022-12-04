import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
Component for list books found in database
Needs to add search by tag ability 
*/
function BookListing({ title, tagFilter, setCurrentBook }) {
  //Book sent from database
  const [books, setBooks] = useState(null);

  const navigate = useNavigate();


  
  //Get Books from database
  const getBooks = async () => {
    const response = await fetch("/api/books/t/" + tagFilter);
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setBooks(data);
    }
  };

  const onClick = (item) => {
    setCurrentBook(item);
    navigate("/bookreview");
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <p>{title}</p>
      <ul>
        {books &&
          books.map((book) => (
            <li onClick={(e) => onClick(book)}>{book.title}</li>
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
