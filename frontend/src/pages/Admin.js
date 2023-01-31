import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Component Imports
import BookTable from "../components/BookTable";
import UpdateBook from "../components/UpdateBook";
//UI
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
} from "@mui/material";

import axios from "axios";

//Redux Import
import { getAllBooks } from "../app/features/books/bookSlice";
import { useSelector, useDispatch } from "react-redux";

//Admin page
function Admin() {
  const navigate = useNavigate();

  //Redux
  let currentUser = useSelector((state) => state.users.currentUserID);
  const dispatch = useDispatch();
  //Redux

  const [books, setBooks] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const [active, setActive] = useState(false);

  //Changes state of update form
  const hiddenForm = () => {
    return "hidden";
  };
  //Changes state of update form
  const showForm = () => {
    return "flex flex-col p-5 border-black border-2 rounded-xl gap-2 items-center";
  };

  const getBooks = async () => {
    const response = await axios.get("/api/books");
    setBooks(response.data);
    dispatch(response.data);
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
              <TableCell>Check In/Out</TableCell>
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
                  getBooks={getBooks}
                  setActive={setActive}
                  setTitle={setTitle}
                  setAuthor={setAuthor}
                  setPages={setPages}
                  setId={setId}
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
          getBooks={getAllBooks}
          details={active ? showForm() : hiddenForm()}
        />
      </div>
      <div className="flex gap-2">
        <Button variant="contained" onClick={(e) => navigate("/newbook")}>
          Add New Book
        </Button>
      </div>
    </div>
  );
}

export default Admin;
