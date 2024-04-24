import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/features/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { token } = useSelector(selectAuth);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
