import React from "react";
import { useNavigate } from "react-router-dom";

//Simple Navbar
function NavBar() {
  const navigate = useNavigate();

  const signInClick = () => {
    if (document.cookie == "status=in") {
      navigate("/admin");
    } else {
      navigate("/signin");
    }
    console.log(document.cookie);
  };

  return (
    <div className=" flex justify-evenly border-2 border-black">
      <h1 onClick={(e) => navigate("/")}>Home Books</h1>
      <div className="flex gap-10 ">
        <button
          className="border-2 border-black"
          onClick={(e) => signInClick()}
        >
          Sign In
        </button>
        <button
          className="border-2 border-black"
          onClick={(e) => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default NavBar;
