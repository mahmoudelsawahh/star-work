import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../css/HomePage/hero3Slider.css";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Hero3ForMobile({ data }) {
  const language = useSelector((state) => state.LanguageSlice.language);
  const handelDataInImage = () => {
    if (language === "english") {
      return "Find new Car";
    } else if (language === "italy") {
      return "Find new Car";
    } else if (language === "franca") {
      return "Find new Car";
    } else if (language === "Arabic") {
      return "Find new Car";
    }
  };
  return (
    <>
      <Swiper
        slidesPerView={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map((ele, index) => {
          return (
            <SwiperSlide key={index}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                    padding: "25px 15px",
                    textAlign: "left",
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                    {ele.name}
                  </Typography>
                  <Box>
                    <Button
                      variant="text"
                      startIcon={<DoubleArrowIcon />}
                      color="error"
                      sx={{ fontWeight: "bold" }}
                    >
                      {handelDataInImage()}
                    </Button>
                  </Box>
                </Box>
                <img src={ele.img} alt={ele.name} width="100%" />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
