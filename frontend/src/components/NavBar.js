import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-around border-2 border-black">
      <p>Logo Picture</p>
      <h1>Home Books</h1>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-black"
      />
      <button
        className="border-2 border-black"
        onClick={(e) => navigate("/admin")}
      >
        Sign In
      </button>
      <button className="border-2 border-black">Sign Up</button>
    </div>
  );
}

export default NavBar;
