import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

//import Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NewBook from "./pages/NewBook";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newbook" element={<NewBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
