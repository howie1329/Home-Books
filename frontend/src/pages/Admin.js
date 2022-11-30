import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Component Imports
import BookTable from "../components/BookTable";
import UpdateBook from "../components/UpdateBook";

function Admin() {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const [books, setBooks] = useState(null);
  const [active, setActive] = useState(false);

  const getBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    if (response.ok) {
      setBooks(data);
    }
  };

  const hidden = () => {
    return "hidden";
  };

  const show = () => {
    return "border-black border-2";
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <BookTable
                  key={book._id}
                  id={book._id}
                  book_id={book.book_id}
                  title={book.title}
                  author={book.author}
                  pages={book.pages}
                  cost={book.cost}
                  status={book.status}
                  setActive={setActive}
                  active={active}
                  setTitle={setTitle}
                  setAuthor={setAuthor}
                  setPages={setPages}
                  setId={setId}
                  getBooks={getBooks}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <UpdateBook
          id={id}
          title={title}
          author={author}
          pages={pages}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setPages={setPages}
          setActive={setActive}
          getBooks={getBooks}
          details={active ? show() : hidden()}
        />
      </div>
      <button onClick={(e) => navigate("/newbook")}>Add New Book</button>
    </div>
  );
}

export default Admin;
