import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

//import Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NewBook from "./pages/NewBook";
import BookReview from "./pages/BookReview";

function App() {
  const [currentBook, setCurrentBook] = useState("");

  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home setCurrentBook={setCurrentBook} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newbook" element={<NewBook />} />
          <Route
            path="/bookreview"
            element={<BookReview current={currentBook} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
