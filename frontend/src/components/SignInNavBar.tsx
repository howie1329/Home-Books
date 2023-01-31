import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { signOut } from "../app/features/users/userSlice";

//Simple Navbar
function SignInNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <div className=" flex justify-between rounded-xl items-center border-2 border-black px-5 mb-3">
      <Typography variant="h6">Home Books</Typography>
      <Button variant="contained" onClick={(e) => signout()}>
        Sign Out
      </Button>
    </div>
  );
}

export default SignInNavBar;
