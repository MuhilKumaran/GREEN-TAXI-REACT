import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbarStyle.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#41b31d" }}
      >
        <div className="container">
          <h1 style={{ color: "white" }}>Green Taxi</h1>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="myNavBar"
          >
            <ul className="navbar-nav ms-auto nav-list" style={{ gap: "30px" }}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/booking"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                >
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                >
                  About US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
