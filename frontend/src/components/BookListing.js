import { React, useEffect, useState } from "react";

function BookListing({ title }) {
  const [books, setBooks] = useState(null);

  const bookListing = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setBooks(data);
    }
  };

  useEffect(() => {
    bookListing();
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
