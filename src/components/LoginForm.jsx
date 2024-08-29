import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/users";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: username, password: password }));
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleNameChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePwChange}
        />
      </div>
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LoginForm;
