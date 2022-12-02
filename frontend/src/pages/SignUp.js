import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user_id, setUser_id] = useState();
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = { user_id, fullname, username, password, role };
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div>
      <p>Sign Up!!!</p>
      <div>
        <form>
          <label>UserID:</label>
          <input
            type="text"
            onChange={(e) => setUser_id(e.target.value)}
          ></input>
          <label>Full Name:</label>
          <input
            type="text"
            onChange={(e) => setFullname(e.target.value)}
          ></input>
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
          <label>Roles:</label>
          <input
            type="radio"
            value="admin"
            name="role"
            onClick={(e) => setRole(e.target.value)}
          ></input>
          <label>Admin</label>
          <input
            type="radio"
            value="reg"
            name="role"
            onClick={(e) => setRole(e.target.value)}
          ></input>
          <label>Regular User</label>
        </form>
        <button onClick={(e) => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}

export default SignUp;
