import { Box } from "@mui/material";
import React from "react";
import firstImage from "../../assets/black-luxury-sport-sedan-car-standing-race-trace.jpg";
import secondImage from "../../assets/stylish-elegant-couple-car-salon.jpg";

const ImageHero = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box>
          <img src={firstImage} alt="black-luxury-sport" width={"100%"} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: 0,
            bottom: "-30px",
            width: { xs: "48%", sm: "37%", md: "48%" },
          }}
        >
          <img src={secondImage} alt="stylish-elegant" width={"100%"} />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageHero;
