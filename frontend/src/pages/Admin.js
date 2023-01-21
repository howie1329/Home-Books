import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Component Imports
import BookTable from "../components/BookTable";
import UpdateBook from "../components/UpdateBook";
import {
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Button,
  Typography,
} from "@mui/material";

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
    return "flex flex-col p-5 border-black border-2 rounded-xl gap-2 items-center";
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <Typography variant="h6" className="text-center underline">
        {currentUser.fullname}'s Admin Page
      </Typography>
      <div className="flex flex-col items-center mb-3">
        <Typography variant="subtitle" className="underline">
          Book List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Pages</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="border-2 border-black">
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
          </TableBody>
        </Table>
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
      <Button variant="contained" onClick={(e) => navigate("/newbook")}>
        Add New Book
      </Button>
    </div>
  );
}

export default Admin;
