import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default AuthRoute;
