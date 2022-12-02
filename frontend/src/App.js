import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

//import Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NewBook from "./pages/NewBook";
import BookReviewPage from "./pages/BookReviewPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [currentBook, setCurrentBook] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState();

  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home setCurrentBook={setCurrentBook} />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
                setRole={setRole}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin currentUser={currentUser} />} />
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
