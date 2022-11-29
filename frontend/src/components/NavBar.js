import React from "react";

function NavBar() {
  return (
    <div className=" flex justify-around border-2 border-black">
      <p>Logo Picture</p>
      <h1>Home Books</h1>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-black"
      />
      <button className="border-2 border-black">Sign In</button>
      <button className="border-2 border-black">Sign Up</button>
    </div>
  );
}

export default NavBar;
