import React from "react";
import "../Styles/loginStyle.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div class="container login-container px-6">
        <h2 class="text-center mb-4 login-tit">Login</h2>
        <form action="#" method="post">
          <div className="form-group">
            <select class="form-select" id="userRole">
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="driver">Driver</option>
            </select>
          </div>
          <div class="form-group">
            <label for="emailMobile">Email/Mobile No:</label>
            <input
              type="text"
              class="form-control"
              id="emailMobile"
              placeholder="Enter email/mobile"
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <br></br>
          <Link to="/forgotPassword">
            <p className="text-center">Forgot Password? </p>
          </Link>
          <center>
            <button type="submit" class="btn btn-primary btn-block btn-login">
              Login
            </button>
          </center>
          <div class="text-center mt-3">
            <Link to="/signup">
              <p class="s-up">SignUp</p>
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
