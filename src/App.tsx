import React, { useEffect } from "react";
import MainRoute from "./router";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshToken } from "./services/auth/authService";
import { loginSuccess, logout } from "./store/features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      refreshToken().then(
        (response) => {
          dispatch(loginSuccess( response?.data ));
        },
        (error) => {
          console.log("Error while getting user by token", error);
          dispatch(logout());
        }
      );
    }
  }, [dispatch]);

  return (
    <HashRouter>
      <MainRoute />
    </HashRouter>
  );
};

export default React.memo(App);
