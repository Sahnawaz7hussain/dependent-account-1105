import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  let obj = JSON.parse(localStorage.getItem("keyname")) || {};

  if ("not user found") {
    return <Navigate to="/signin" />;
  }

  return children;
}

export default AuthRoute;
