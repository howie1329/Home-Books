import React from "react";
//Creates Table Row Data of Book
function BookTable({ book, id, setActive, active, setId, getBooks }) {
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
    <tr>
      <td>{book.book_id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.pages}</td>
      <td>{book.status}</td>
      <td>{book.cost}</td>
      <td>
        <button onClick={(e) => handleEdit()}>Edit</button>
      </td>
      <td>
        <button onClick={(e) => handleDelete()}>Delete</button>
      </td>
    </tr>
  );
}

export default BookTable;
