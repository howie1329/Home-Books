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
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col w-80 h-60 border-black border-2 items-center">
        <p>Sign Up!!!</p>
        <div className="flex flex-col">
          <form className="flex flex-col">
            <div className="flex">
              <label>UserID:</label>
              <input
                type="text"
                onChange={(e) => setUser_id(e.target.value)}
                className="border-black border-2"
              ></input>
            </div>
            <div className="flex">
              <label>Full Name:</label>
              <input
                type="text"
                onChange={(e) => setFullname(e.target.value)}
                className="border-black border-2"
              ></input>
            </div>
            <div className="flex">
              <label>Username:</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="border-black border-2"
              ></input>
            </div>
            <div className="flex">
              <label>Password:</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                className="border-black border-2"
              ></input>
            </div>
            <label className="self-center underline">Roles</label>
            <div className="flex justify-evenly">
              <label>Admin</label>
              <input
                type="radio"
                value="admin"
                name="role"
                onClick={(e) => setRole(e.target.value)}
              ></input>
            </div>
            <div className="flex justify-evenly">
              <label>Regular User</label>
              <input
                type="radio"
                value="reg"
                name="role"
                onClick={(e) => setRole(e.target.value)}
              ></input>
            </div>
          </form>
          <button
            className="self-center border-black border-2"
            onClick={(e) => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
