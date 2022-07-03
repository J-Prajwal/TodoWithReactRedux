import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../store/Auth/auth.actions";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate;
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutApi(dispatch);
    navigate('/');
  }
  return (
    <div>
      <button onClick={handleLogout}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
