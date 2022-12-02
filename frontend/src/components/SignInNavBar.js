import React from "react";
import { useNavigate } from "react-router-dom";

//Simple Navbar
function SignInNavBar({ setLoggedIn, setCurrentUser, setRole }) {
  const navigate = useNavigate();

  const signout = () => {
    setCurrentUser("");
    setRole("");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className=" flex justify-around border-2 border-black">
      <p>Logo Picture</p>
      <h1>Home Books</h1>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-black"
      />
      <button className="border-2 border-black" onClick={(e) => signout()}>
        Sign Out
      </button>
    </div>
  );
}

export default SignInNavBar;
