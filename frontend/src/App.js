import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

//import Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NewBook from "./pages/NewBook";
import BookReviewPage from "./pages/BookReviewPage";
import SignUp from "./pages/SignUp";

function App() {
  const [currentBook, setCurrentBook] = useState("");

  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home setCurrentBook={setCurrentBook} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newbook" element={<NewBook />} />
          <Route
            path="/bookreview"
            element={<BookReviewPage current={currentBook} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
