import { React, useEffect, useState } from "react";

/*
Component for list books found in database
Needs to add search by tag ability 
*/
function BookListing({ title, tagFilter }) {
  //Book sent from database
  const [books, setBooks] = useState(null);

  //Get Books from database
  const getBooks = async () => {
    const response = await fetch("/api/books/t/" + tagFilter);
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setBooks(data);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <p>{title}</p>
      <ul>{books && books.map((book) => <li>{book.title}</li>)}</ul>
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
