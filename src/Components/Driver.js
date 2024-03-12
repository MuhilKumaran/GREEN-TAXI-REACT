import React from "react";
import "../Styles/driverStyle.css";
import Footer from "./Footer";
const Driver = () => {
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="row justify-content-center">
          <div className="col-md-5 driver-container">
            <h2 class="text-center mb-4 driver-title">Become a Driver</h2>
            <form action="#" method="post">
              <div class="mb-3">
                <label for="FullName" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="FullName"
                  placeholder="Enter Full Name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Email"
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
                  placeholder="Enter Mobile No"
                />
              </div>
              <div class="mb-3">
                <label for="licence" class="form-label">
                  Upload your Driving Licence
                </label>
                <input type="file" class="form-control" id="licence" />
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
                </div>
              </div>
              <div class="mb-3">
                <label for="experience" class="form-label">
                  Years Of Experience
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="experience"
                  placeholder="Years of Experience"
                />
              </div>
              <div class="mb-3">
                <center>
                  <input type="submit" class="btn btn-primary" />
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Driver;
