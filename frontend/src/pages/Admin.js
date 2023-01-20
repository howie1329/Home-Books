import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Component Imports
import BookTable from "../components/BookTable";
import UpdateBook from "../components/UpdateBook";

//Admin page
function Admin({ currentUser }) {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const [books, setBooks] = useState(null);
  const [active, setActive] = useState(false);

  //Gets all books currently in database
  const getBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    if (response.ok) {
      setBooks(data);
    }
  };

  //Changes state of update form
  const hiddenForm = () => {
    return "hidden";
  };
  //Changes state of update form
  const showForm = () => {
    return "border-black border-2";
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <h1 className="text-center underline">
        {currentUser.fullname}'s Admin Page
      </h1>
      <div className="flex flex-col items-center">
        <p className="underline">Book List</p>
        <table className="border-2 border-black">
          <thead className="border-2 border-black">
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
          <tbody className="border-2 border-black">
            {books &&
              books.map((book) => (
                <BookTable
                  key={book._id}
                  id={book._id}
                  book={book}
                  active={active}
                  setActive={setActive}
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
          details={active ? showForm() : hiddenForm()}
        />
      </div>
      <button className="mt-5" onClick={(e) => navigate("/newbook")}>
        Add New Book
      </button>
    </div>
  );
}

export default Admin;
