import React from "react";
import OLAA from "../IMAGES/OLAA.jpg";
import "../Styles/bookingStyle.css";
import Footer from "./Footer";
import Corousel from "../Components/Corousel";
const Booking = () => {
  return (
    <div className="body-box">
      <div className="container-fluid px-5">
        <div className="row">
          <br></br>
        </div>
        <div className="row">
          <div className="col-md-8 col-12 info ">
            <h2>CONVINIENT-BOOKING, {"  "} ON-TIME PICK-UP</h2>
            <h2 style={{ textIndent: "20px" }}>
              <span style={{ color: "#41b31d" }}>Green Taxi</span> Provides a
              Seamless and Convinient Booking of Cabs . Enjoy Your Door Step
              Pick Up
            </h2>
          </div>
          <div className="col-md-4 col-12">
            <img
              src={OLAA}
              alt="e-veh"
              width="100%"
              height={"300px"}
              className="info-logo"
            />
          </div>
        </div>
        <div className="row">
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="container-fluid px-4">
        <Corousel />
        <br></br>
        <br></br>
      </div>

      <div className="container px-4">
        <div className="row justify-content-center ">
          <div className="col-md-6 formdiv">
            <h2 className="mb-4 text-center" style={{ fontStyle: "italic" }}>
              START BOOKING
            </h2>
            <form action="#" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="1234567890"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pick-date" className="form-label">
                  Pick Up Date
                </label>
                <input type="date" className="form-control" id="pick-date" />
              </div>
              <div className="mb-3">
                <label htmlFor="drop-city" className="form-label">
                  Pick Up Location
                </label>
                <br></br>

                <select className="form-select">
                  <option value="mylocation" className="coimbatore">
                    My Location
                  </option>
                  <option value="Trichy" className="trichy">
                    Trichy
                  </option>
                  <option value="Chennai" className="chennai">
                    Chennai
                  </option>
                  <option value="Tanjore" className="tanjore">
                    Tanjore
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="pick-time" className="form-label">
                  Pick Up Time
                </label>
                <input type="time" className="form-control" id="pick-date" />
              </div>
              <div className="mb-3">
                <label htmlFor="drop-city" className="form-label">
                  Drop city
                </label>
                <br></br>

                <select className="form-select">
                  <option value="Coimbatore" className="coimbatore">
                    Coimbatore
                  </option>
                  <option value="Trichy" className="trichy">
                    Trichy
                  </option>
                  <option value="Chennai" className="chennai">
                    Chennai
                  </option>
                  <option value="Tanjore" className="tanjore">
                    Tanjore
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="2"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <center>
                <button type="submit" className="btn btn-primary sub">
                  Book Now
                </button>
              </center>
              <br></br>
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

export default Booking;

