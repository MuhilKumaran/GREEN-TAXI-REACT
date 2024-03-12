import React from "react";
import OLAA from "../IMAGES/OLAA.jpg";
import "../Styles/bookingStyle.css";
import Footer from "./Footer";
const Booking = () => {
  return (
    <div>
      <div className="container-fluid px-5">
        <div className="row">
          <br></br>
        </div>
        <div className="row">
          <div class="col-md-8 col-12 info ">
            <h2>
              CONVINIENT-BOOKING, <br /> ON-TIME PICK-UP
            </h2>
            <h2>
              Greeen Taxi Provides a Seamless and Convinient Booking of Cabs .
              Enjoy Your Door Step Pick Up
            </h2>
          </div>
          <div class="col-md-4 col-12">
            <img
              src={OLAA}
              alt="e-veh"
              width="100%"
              height={"400px"}
              class="info-logo"
            />
          </div>
        </div>
        <div className="row">
          <br></br>
          <br></br>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-md-6 formdiv">
            <h2
              class="mb-4 text-center"
              style={{ fontStyle: "italic", color: "snow" }}
            >
              START BOOKING
            </h2>
            <form action="#" method="post">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="mobile" class="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="mobile"
                  placeholder="1234567890"
                />
              </div>
              <div class="mb-3">
                <label for="pick-date" class="form-label">
                  Pick Up Date
                </label>
                <input type="date" class="form-control" id="pick-date" />
              </div>
              <div class="mb-3">
                <label for="pick-time" class="form-label">
                  Pick Up Time
                </label>
                <input type="time" class="form-control" id="pick-date" />
              </div>
              <div class="mb-3">
                <label for="drop-city" class="form-label">
                  Drop city
                </label>
                <br></br>
                {/* <input type="text" class="form-control" id="drop-city" /> */}
                <select>
                  <option value="Coimbatore" class="coimbatore">
                    Coimbatore
                  </option>
                  <option value="Trichy" class="trichy">
                    Trichy
                  </option>
                  <option value="Chennai" class="chennai">
                    Chennai
                  </option>
                  <option value="Tanjore" class="tanjore">
                    Tanjore
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="comment" class="form-label">
                  Comment
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="2"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <center>
                <button type="submit" class="btn btn-primary sub">
                  Book Now
                </button>
              </center>
              <br></br>
            </form>
          </div>
        </div>
        <div class="row">
          <br></br>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
