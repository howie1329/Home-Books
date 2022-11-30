import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Component Imports
import BookTable from "../components/BookTable";

function Admin() {
  const navigate = useNavigate();

  const [books, setBooks] = useState(null);

  const getBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    if (response.ok) {
      setBooks(data);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <p>Book List</p>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
              <th>Status</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <BookTable
                  key={book._id}
                  book_id={book.book_id}
                  title={book.title}
                  author={book.author}
                  pages={book.pages}
                  cost={book.cost}
                  status={book.status}
                />
              ))}
          </tbody>
        </table>
      </div>
      <button onClick={(e) => navigate("/newbook")}>Add New Book</button>
    </div>
  );
}

export default Admin;
