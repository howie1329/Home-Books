import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Typography } from "@mui/material";

function SignIn({ setCurrentUser, setLoggedIn, setRole, loggedIn, role }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const roleDirection = (role, loggedIn) => {
    if (role === "admin" && loggedIn === true) {
      navigate("/admin");
    } else {
      navigate("/reguser");
    }
  };

  const handleSubmit = async () => {
    const response = await fetch(`/api/users/user/${username}`);
    const data = await response.json();
    if (response.ok) {
      if (password === data[0].password) {
        setCurrentUser(data[0]);
        console.log(data[0]);
        setRole(data[0].role);
        setLoggedIn(true);
        roleDirection(data[0].role, true);
        document.cookie = "status=in";
      }
    } else {
      alert("username or password is wrong");
    }
  };

  return (
    <div className=" flex w-screen h-screen items-center justify-center ">
      <div className="flex flex-col w-72 h-60 border-black border-2 rounded-xl justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <Typography variant="h4">Log In</Typography>
          <TextField
            label="Username"
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained" onClick={(e) => handleSubmit()}>
            Sign IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
