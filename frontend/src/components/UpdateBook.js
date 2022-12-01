import React from "react";

//Book Form for updating
function UpdateBook({
  details,
  title,
  author,
  pages,
  id,
  setTitle,
  setAuthor,
  setPages,
  setActive,
  getBooks,
}) {
  //Need to add validation and error response

  //Submit function... sending book data back to database
  const handleSubmit = async () => {
    const book = { title, author, pages };
    const response = await fetch("/api/books/" + id, {
      method: "PATCH",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setActive(false);
    getBooks();
  };
  return (
    <div>
      <div className={details}>
        <p>Update Your Book</p>
        <form className="flex flex-col">
          <label>Title:</label>
          <input
            className="border-black border-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Author:</label>
          <input
            className="border-black border-2"
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <label>Pages:</label>
          <input
            className="border-black border-2"
            type="number"
            onChange={(e) => setPages(e.target.value)}
          ></input>
        </form>
        <button onClick={(e) => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}

export default UpdateBook;
