import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../store/Auth/auth.actions";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    const creds = {
      email: email,
      password: password,
    };
    loginApi(creds, dispatch);
  };

  if (isAuth) {
    navigate("/");
  }
  return (
    <div
      style={{
        border: "1px solid black",
        width: "30%",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="eve.holt@reqres.in"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="cityslicka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
