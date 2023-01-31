import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

//import Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NewBook from "./pages/NewBook";
import BookReviewPage from "./pages/BookReviewPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignInNavBar from "./components/SignInNavBar";
import CheckOut from "./pages/CheckOut";
import ProtectedRoute from "./components/ProtectedRoute";

//Redux
import { useSelector } from "react-redux";

function App() {
  const currentLog = useSelector((state) => state.users.loggedIn);

  return (
    <BrowserRouter>
      {currentLog ? <SignInNavBar /> : <NavBar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/newbook" element={<NewBook />} />
          <Route path="/bookreview" element={<BookReviewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
