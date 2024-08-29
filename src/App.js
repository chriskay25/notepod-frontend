import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AuthForms from "./components/AuthForms";
import { getCurrentUser } from "./actions/users";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!currentUser && token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, currentUser]);

  return (
    <div className="App">
      <Header />
      {currentUser ? <Home /> : <AuthForms />}
    </div>
  );
};

export default App;
