import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  RadioGroup,
  Radio,
  Button,
  FormControlLabel,
  Typography,
} from "@mui/material";

import axios from "axios";

function SignUp() {
  const [user_id, setUser_id] = useState();
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = { user_id, fullname, username, password, role };
    const res = await axios.post("/api/users",user)
    navigate("/");
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col w-80 h-76 border-black border-2 rounded-xl justify-center items-center p-4">
        <Typography variant="h5"> Sign Up</Typography>
        <div className="flex flex-col">
          <form className="flex flex-col">
            <TextField
              label="UserID"
              variant="standard"
              onChange={(e) => setUser_id(e.target.value)}
            />
            <TextField
              label="Full Name"
              variant="standard"
              onChange={(e) => setFullname(e.target.value)}
            />
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
            <RadioGroup>
              <div className="flex flex-row">
                <FormControlLabel
                  value="admin"
                  control={
                    <Radio
                      value="admin"
                      onClick={(e) => setRole(e.target.value)}
                    />
                  }
                  label="Admin"
                  onClick={(e) => setRole(e.target.value)}
                />
                <FormControlLabel
                  value="reg"
                  control={
                    <Radio
                      value="reg"
                      onClick={(e) => setRole(e.target.value)}
                    />
                  }
                  label="Regular User"
                  onClick={(e) => setRole(e.target.value)}
                />
              </div>
            </RadioGroup>
          </form>
          <Button variant="contained" onClick={(e) => handleSubmit()}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
