import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      }
    } else {
      alert("username or password is wrong");
    }
  };

  const validate = () => {
    if (loggedIn === false) {
      return "flex";
    } else {
      return "hidden";
    }
  };
  return (
    <div className=" flex w-screen h-screen items-center justify-center ">
      <div className="flex flex-col w-60 h-40 border-black border-2 place-content-center">
        <div className="flex justify-center">
          <p className="border-black border-2">Log IN</p>
        </div>
        <form className="flex flex-col items-center">
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="border-black border-2"
          ></input>
          <label>Password:</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="border-black border-2"
          ></input>
        </form>
        <p className={validate()}>Wrong Information Please Try Again</p>
        <button onClick={(e) => handleSubmit()}>Sign IN</button>
      </div>
    </div>
  );
}

export default SignIn;
