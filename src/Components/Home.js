import React from "react";
import "../Styles/homeStyle.css";
import ola2 from "../IMAGES/ola2.svg";
import ola3 from "../IMAGES/ola3.svg";
import Footer from "./Footer";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Home = () => {
  return (
    <div>
      <div class="container-fluid px-5">
        <div class="row">
          <br></br>
        </div>
        <div class="row d-flex justify-content-between">
          <div class="col-md-6 col-12 note">
            <h2>First Time in Coimbatore</h2>
            <p>
              Introducing Us{" "}
              <span style={{ color: "#41b31d" }}>GREEN TAXI</span> To You
              All,The First Electric Vehicle Cabs!.Experience The Eco Friendly
              Environment.Just Visit Us. Enjoy Your Ride With Pleasure On a
              Electric Vehicle!
            </p>
          </div>
          <div class="col-12  col-md-4">
            <iframe
              width={"100%"}
              height={"250px"}
              title="location"
              style={{
                frameborder: "0",
                marginheight: "0",
                marginwidth: "0",
              }}
              src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=coimbatore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Location</a>
            </iframe>
          </div>
        </div>
        <div class="row">
          <br></br>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="card-img">
              <img src={ola2} alt="e-car" width="100%" height="260px" />
            </div>
            <div class="card-text">
              <p>
                Prime Hatchbacks to Prime Sedans and Prime SUVs,you will find a
                ride in your budget at your convenience any time.
              </p>
            </div>
          </div>

          <div class="col-md-4 col-12">
            <div class="card-img">
              <img src={ola2} alt="e-car" width="100%" height="260px" />
            </div>
            <div class="card-text">
              <p>
                Book rides within the city with Daily, or take a trip to your
                favourite destinations outside the city with your Outstation.
              </p>
            </div>
          </div>

          <div class="col-md-4 col-12">
            <div class="card-img">
              <img src={ola3} alt="e-car" width="100%" height="260px" />
            </div>
            <div class="card-text">
              <p>
                Easily plan a day out without having to worry about conveyance
                with an hour-based package from Rental.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <br></br>
        </div>
      </div>

      {/* <div class="container fluid">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
          
        >
          <div class="carousel-inner bg-primary" style={{height:"300px",width:"100%"}}>
            <div class="carousel-item active" data-bs-interval="2000">
              <img src={ola2} class="d-block" width={"100%"} height={"300px"} alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={ola2} class="d-block" width={"100%"} height={"300px"} alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={ola2} class="d-block" width={"100%"} height={"300px"} alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ola2} alt="e-car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ola2} alt="e-car" />
        </SwiperSlide>
      </Swiper> */}
      <Footer />
    </div>
  );
};

export default Home;
