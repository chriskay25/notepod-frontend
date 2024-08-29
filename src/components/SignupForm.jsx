import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions/users";

const SignupForm = () => {
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
    dispatch(signup({ username: username, password: password }));
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Choose username"
          name="username"
          value={username}
          onChange={handleNameChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Choose password"
          name="password"
          value={password}
          onChange={handlePwChange}
        />
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignupForm;
