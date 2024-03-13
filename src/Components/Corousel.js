import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../Components/Review";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/corouselStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Corousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Corousel;
