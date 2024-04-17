import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  selectAuth,
} from "../../store/features/auth/authSlice";
import { loginService } from "../../services/auth/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, token } = useSelector(selectAuth);

  const handleLogin = async () => {
    try {
      dispacth(loginStart());
      const data = await loginService({
        username: formik.values.username,
        password: formik.values.password,
      });
      dispacth(loginSuccess(data));
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error: any) {
      dispacth(loginFailure(error.message));
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: () => {
      handleLogin();
    },
  });

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="border-2"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border-2"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
