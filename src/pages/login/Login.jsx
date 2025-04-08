import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    // Call the login API here with loginInfo
    axios
      .post("http://localhost:3000/api/v1/user/login", loginInfo, {
        withCredentials: true,
      })
      .then((res) => {
        navigate("/dashboard");
        console.log(res.data);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
