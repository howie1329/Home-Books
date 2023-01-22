import React from "react";
import { useNavigate } from "react-router-dom";

import { TableRow, TableCell, Button } from "@mui/material";

//Creates Table Row Data of Book
function BookTable({ book, id, setActive, active, setId, getBooks }) {
  const navigate = useNavigate();

  const checkInOut = () => {
    setId(id);
    console.log(id);
    navigate("/checkout");
  };

  //Edit function brings up update component
  const handleEdit = () => {
    setId(id);
    setActive(!active);
  };

  //Deletes book from database then updates all books
  const handleDelete = async () => {
    const response = await fetch("/api/books/" + id, {
      method: "DELETE",
    });
    getBooks();
  };
  return (
    <TableRow>
      <TableCell className="border-2 border-black">{book.book_id}</TableCell>
      <TableCell className="border-2 border-black">{book.title}</TableCell>
      <TableCell className="border-2 border-black">{book.author}</TableCell>
      <TableCell className="border-2 border-black">{book.pages}</TableCell>
      <TableCell className="border-2 border-black">{book.status}</TableCell>
      <TableCell className="border-2 border-black">{book.cost}</TableCell>
      <TableCell className="border-2 border-black">
        <Button variant="contained" onClick={(e) => handleEdit()}>
          Edit
        </Button>
      </TableCell>
      <TableCell className="border-2 border-black">
        <Button
          variant="contained"
          color="error"
          onClick={(e) => handleDelete()}
        >
          Delete
        </Button>
      </TableCell>
      <TableCell className="border-2 border-black">
        <Button variant="contained" onClick={(e) => checkInOut()}>
          In/Out
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default BookTable;
