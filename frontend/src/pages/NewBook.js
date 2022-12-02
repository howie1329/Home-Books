import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//New Book Page
function NewBook() {
  const [book_id, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState(["test"]);
  const [cost, setCost] = useState("");

  const navigate = useNavigate();

  //Submit function... sending book data back to database
  //Needs to add error handling
  const handleSubmit = async () => {
    const book = { book_id, title, author, pages, status, cost, tags };
    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/admin");
  };

  return (
    <div>
      <div className="">
        <form className="border-black border-2 flex flex-col">
          <label>Book ID</label>
          <input
            type="text"
            onChange={(e) => setBookId(e.target.value)}
          ></input>
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
          <label>Author</label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <label>Pages</label>
          <input type="text" onChange={(e) => setPages(e.target.value)}></input>
          <label>Status</label>
          <div className="flex gap-2">
            <input
              type="radio"
              name="status"
              value="IN"
              onClick={(e) => setStatus(e.target.value)}
            ></input>
            <label>IN</label>
            <input
              type="radio"
              name="status"
              value="Out"
              onClick={(e) => setStatus(e.target.value)}
            ></input>
            <label>Out</label>
          </div>
          <label>Cost</label>
          <input type="text" onChange={(e) => setCost(e.target.value)}></input>
          <div>
            <label>Tags</label>
            <div>
              <input
                onClick={(e) => setTags([...tags, e.target.value])}
                type="checkbox"
                id="tags"
                value="hot"
              ></input>
              <label for="tags">Hot</label>
              <input
                onClick={(e) => setTags([...tags, e.target.value])}
                type="checkbox"
                id="tags"
                value="trending"
              ></input>
              <label for="tags">Trending</label>
              <input
                onClick={(e) => setTags([...tags, e.target.value])}
                type="checkbox"
                id="tags"
                value="nonfiction"
              ></input>
              <label for="tags">Non-Fiction</label>
              <input
                onClick={(e) => setTags([...tags, e.target.value])}
                type="checkbox"
                id="tags"
                value="Fiction"
              ></input>
              <label for="tags">Fiction</label>
              <input
                onClick={(e) => setTags([...tags, e.target.value])}
                type="checkbox"
                id="tags"
                value="fantasy"
              ></input>
              <label for="tags">Fantasy</label>
              <input
                onClick={(e) => setTags([...tags, e.target.value])}
                type="checkbox"
                id="tags"
                value="romance"
              ></input>
              <label for="tags">Romance</label>
            </div>
          </div>
        </form>
        <button onClick={(e) => handleSubmit()}>Add Book</button>
        <button onClick={(e) => navigate("/admin")}>Cancel</button>
      </div>
    </div>
  );
}

export default NewBook;
