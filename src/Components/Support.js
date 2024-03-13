import React from "react";
import "../Styles/supportStyle.css";
import Footer from "./Footer";
const Support = () => {
  return (
    <div>
      <br></br>
      <div className="container px-4">
        
        <div className="row justify-content-center">
        
          <div className="col-md-6 form-container">
            <form action="#" method="post">
              <div className="form-group">
              <h2 className="text-center mb-4 sup-tit">Support</h2>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feedback Type:</label>
                <select
                  className="form-select"
                  id="feedback"
                  name="feedback"
                  required
                >
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <br />
              <center>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Support;
