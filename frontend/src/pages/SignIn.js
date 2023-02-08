import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//UI
import { TextField, Button, Typography } from "@mui/material";

//Redux
import { signIn, roleDirection } from "../app/features/users/userSlice";
import { useDispatch} from "react-redux";

import axios from "axios";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  const handleSubmit = async () => {
    const response = await axios.post("/api/users/login",{username,password}) 
    console.log(response)
    if (response.status === 200) {
      const payData = {
        currentUserID: response.data.user,
        role: response.data.user.role,
        loggedIn: true,
      };
      dispatch(signIn(payData));
      navigate(roleDirection(response.data.user.role, true));
    } else{
      alert("Wrong Username... Can't Find User")
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
