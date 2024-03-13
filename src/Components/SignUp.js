import React from "react";
import "../Styles/signupStyle.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="row justify-content-center">
          <div className="col-md-5 signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                  <br></br>
                  <Link to="/login">
                    <center><p className="acc-info">Already have an account? Login</p></center>
                  </Link>
                </div>
              </div>
              <center>
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </center>
            </form>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
