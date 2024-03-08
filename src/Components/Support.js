import React from "react";
import "../Styles/supportStyle.css";
import Footer from "./Footer";
const Support = () => {
  return (
    <div>
      <br></br>
      <div class="container px-4">
        
        <div class="row justify-content-center">
        
          <div class="col-md-6 form-container">
            <form action="#" method="post">
              <div class="form-group">
              <h2 class="text-center mb-4 sup-tit">Support</h2>
                <label for="name">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input
                  type="tel"
                  class="form-control"
                  id="mobile"
                  name="mobile"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  required
                />
              </div>
              <div class="form-group">
                <label for="feedback">Feedback Type:</label>
                <select
                  class="form-select"
                  id="feedback"
                  name="feedback"
                  required
                >
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Your Message:</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <br />
              <center>
                <button type="submit" class="btn btn-primary">
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
