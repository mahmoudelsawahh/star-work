import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../css/HomePage/homePageStyle.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import LandingComponent from "./landiningComponent";
import SecondSlide from "./SecondSlide";
import SliderThree from "./SliderThree";

export default function SliderComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LandingComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SecondSlide />
        </SwiperSlide>

        <SwiperSlide>
          <SliderThree />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
