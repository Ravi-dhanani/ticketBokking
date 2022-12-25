import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";
import { Navigation } from "swiper";
// import required modules

export default function HomePageSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1671453965372_2wdq.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1669652237314_homepageweb.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1671700840413_nye.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1671453965372_2wdq.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
