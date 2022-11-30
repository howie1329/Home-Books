import React from "react";

function BookTable({ book_id, title, author, pages, status, cost }) {
  return (
    <tr>
      <td>{book_id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pages}</td>
      <td>{status}</td>
      <td>{cost}</td>
    </tr>
  );
}

export default BookTable;
