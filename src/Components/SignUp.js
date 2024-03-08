import React from "react";
import "../Styles/signupStyle.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <div class="container-fluid px-4">
        <div class="row justify-content-center">
          <div class="col-md-5 signup-container">
            <h2 class="signup-title">Sign Up</h2>
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label">
                  Gender
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                  <br></br>
                  <Link to="/login">
                    <center><p class="acc-info">Already have an account? Login</p></center>
                  </Link>
                </div>
              </div>
              <center>
                <button type="submit" class="btn btn-primary">
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
