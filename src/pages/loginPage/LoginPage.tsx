import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess, selectAuth } from "../../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services/auth/authService";

const LoginPage = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(selectAuth);

  const handleLogin = async () => {
    dispacth(loginStart());
    const response = await getToken({
      username: formik.values.username,
      password: formik.values.password,
    });
    if (response?.data) {
      dispacth(loginSuccess(response.data));
      localStorage.setItem("token", response.data.token);
    }
    navigate("/");

  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const formik = useFormik({
    initialValues: {
      username: "kminchelle",
      password: "0lelplR",
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
