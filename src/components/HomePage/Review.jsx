import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/HomePage/hero3Slider.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import required modules
import { Autoplay } from "swiper";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

export default function Review({ data }) {
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* ---------------------------------------------------------- */}
        <Box>
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    border: "1px solid #ddd",
                  }}
                >
                  <CardActionArea>
                    <CardMedia>
                      <Box
                        sx={{
                          height: "150px",
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img src={item.img} width="100%" alt="car" />
                        <Avatar
                          alt="mahmoud"
                          src={item.clientImage}
                          sx={{
                            position: "absolute",
                            bottom: "-25px",
                            width: "60px",
                            height: "60px",
                          }}
                        />
                      </Box>
                    </CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="h1"
                        sx={{ marginTop: "20px", fontSize: "20px" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="h5"
                        sx={{
                          marginTop: "5px",
                          fontSize: "20px",
                          color: "red",
                        }}
                      >
                        Customer
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          textAlign: "start",
                          height: { sm: "100px", md: "120px", lg: "100px" },
                        }}
                      >
                        {item.txt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Box sx={{ width: "100%" }}>
                      <IconButton aria-label="FormatQuoteIcon">
                        <FormatQuoteIcon
                          sx={{ fontSize: "40px", color: "red" }}
                        />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Box>
        {/* ---------------------------------------------------------- */}
      </Swiper>
    </Container>
  );
}
