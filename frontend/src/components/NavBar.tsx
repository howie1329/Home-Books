import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

//Simple Navbar
function NavBar() {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-between border-2 border-black rounded-xl px-5 items-center">
      <Typography variant="h6" onClick={(e) => navigate("/")}>
        Home Books
      </Typography>
      <div className="flex gap-10 ">
        <Button variant="contained" onClick={(e) => navigate("/signin")}>
          Sign In
        </Button>
        <Button variant="contained" onClick={(e) => navigate("/signup")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
