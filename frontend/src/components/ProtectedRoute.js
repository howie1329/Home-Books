import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loginStatus = useSelector((state) => state.users.loggedIn);
  if (!loginStatus) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default ProtectedRoute;
