import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({children}) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default RequiredAuth;
