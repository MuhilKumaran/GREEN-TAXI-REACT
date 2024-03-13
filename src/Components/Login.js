import React from "react";
import "../Styles/loginStyle.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="container login-container px-6">
        <h2 className="text-center mb-4 login-tit">Login</h2>
        <form action="#" method="post">
          <div className="form-group">
            <select className="form-select" id="userRole">
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="driver">Driver</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="emailMobile">Email/Mobile No:</label>
            <input
              type="text"
              className="form-control"
              id="emailMobile"
              placeholder="Enter email/mobile"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <br></br>
          <Link to="/forgotPassword">
            <p className="text-center">Forgot Password? </p>
          </Link>
          <center>
            <button type="submit" className="btn btn-primary btn-block btn-login">
              Login
            </button>
          </center>
          <div className="text-center mt-3">
            <Link to="/signup">
              <p className="s-up">SignUp</p>
            </Link>
          </div>
        </form>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Login;
