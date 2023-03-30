import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../css/HomePage/hero3Slider.css";
// import required modules
import { Autoplay, FreeMode } from "swiper";

import { Box, Button, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useSelector } from "react-redux";

const englishData = "Find  Car";
const italyData = "Trova auto";
const francData = "Trouver une voiture";
const arabicData = "ابحث عن سيارة ";
export default function Hero3SliderImage({ data }) {
  const language = useSelector((state) => state.LanguageSlice.language);
  const [doneData, setDoneData] = useState(italyData);
  useEffect(() => {
    if (language === "italy") {
      return setDoneData(italyData);
    } else if (language === "english") {
      return setDoneData(englishData);
    } else if (language === "franca") {
      return setDoneData(francData);
    } else if (language === "Arabic") {
      return setDoneData(arabicData);
    }
  }, [language]);

  return (
    <>
      <Swiper
        slidesPerView={5}
        freeMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
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
                    padding: {
                      xs: "15px 10px",
                      lg: "25px 15px",
                    },
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
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {doneData}
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
