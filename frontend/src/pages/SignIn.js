import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ setCurrentUser, setLoggedIn, setRole }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const roleDirection = (role, loggedIn) => {
    if (role === "admin" && loggedIn === true) {
      navigate("/admin");
    } else {
      navigate("reguser");
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
    }
  };
  return (
    <div>
      <p>Sign IN</p>
      <form>
        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </form>
      <button onClick={(e) => handleSubmit()}>Sign IN</button>
    </div>
  );
}

export default SignIn;
