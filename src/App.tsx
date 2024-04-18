import React, { useEffect } from "react";
import MainRoute from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserByToken } from "./services/auth/authService";
import { loginSuccess, logout } from "./store/features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserByToken(token).then(
        (user) => {
          dispatch(loginSuccess({ user, token }));
        },
        (error) => {
          console.log("Error while getting user by token", error);
          dispatch(logout());
        }
      );
    }
  }, [dispatch]);

  return (
    <Router>
      <MainRoute />
    </Router>
  );
};

export default React.memo(App);
