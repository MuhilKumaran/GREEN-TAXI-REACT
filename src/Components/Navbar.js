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
            <ul className="navbar-nav ms-auto nav-list" style={{ gap: "10px" }}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{color:"snow"}}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/booking"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{color:"snow"}}
                >
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{color:"snow"}}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/support"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{color:"snow"}}
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{color:"snow"}}
                >
                  About US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{color:"snow"}}
                >
                  Sign Up/Login
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
