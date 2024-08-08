import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footerStyle.css";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-4 col-12 green-taxi">
          <h2 style={{ color: "snow" }}>About Green Taxi</h2>
          <ul className="detail">
            <Link to="/" className="links">
              <li>Home</li>
            </Link>
            <br />
            <Link to="/booking" className="links">
              <li>Booking</li>
            </Link>
            <br />
            <Link to="/contact" className="links">
              <li>Contact</li>
            </Link>
            <br />
            <Link to="/support" className="links">
              <li>Support</li>
            </Link>
            <br />
            <Link to="/aboutus" className="links">
              <li>About US</li>
            </Link>
          </ul>
        </div>
        <div className="col-md-4 col-12 green-taxi">
          <h2>Info</h2>
          <ul className="detail">
            <Link to="/becomeDriver" className="links">
              <li>Become a Driver</li>
            </Link>
            <br />
            <Link to="privacyAndPolicy" className="links">
              <li>Privacy and Policy</li>
            </Link>
            <br />
            <Link to="termsAndCondition" className="links">
              <li>Terms and Conditions</li>
            </Link>
          </ul>
        </div>
        <div className="col-md-4 col-12 green-taxi">
          <h2>Availability</h2>
          <br />
          <ul>
            <li>
              <i className="fa-brands fa-google-play fa-2xl store"></i> &nbsp;
              &nbsp; <i className="fa-brands fa-app-store-ios fa-2xl store"></i>
            </li>
          </ul>
          <br></br>
          <h2>Get Connect With Us</h2>
          <br />
          <ul>
            <li>
              <i className="fa-brands fa-facebook fa-2xl facebook"></i>&nbsp;
              &nbsp;&nbsp;
              <i className="fa-brands fa-whatsapp fa-2xl whatsapp"></i> &nbsp;
              &nbsp;&nbsp;
              <i className="fa-brands fa-instagram fa-2xl instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
