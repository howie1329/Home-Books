import React from "react";

function BookTable({
  book_id,
  id,
  title,
  author,
  pages,
  status,
  cost,
  setActive,
  active,
  setId,
  getBooks,
}) {
  const handleEdit = () => {
    setId(id);
    setActive(!active);
  };

  const handleDelete = async () => {
    const response = await fetch("/api/books/" + id, {
      method: "DELETE",
    });
    getBooks();
  };
  return (
    <tr>
      <td>{book_id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pages}</td>
      <td>{status}</td>
      <td>{cost}</td>
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
