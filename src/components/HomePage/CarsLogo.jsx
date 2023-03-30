import { Box, Container } from "@mui/material";
import React from "react";
import bmw from "../../assets/types/bmw.svg";
import fiat from "../../assets/types/fiat.svg";
import Group200 from "../../assets/types/Group-200.svg";
import Group203 from "../../assets/types/Group-203.svg";
import Group206 from "../../assets/types/Group-206.svg";
import Group208 from "../../assets/types/Group-208.svg";
import Group209 from "../../assets/types/Group-209.svg";
import hyundai from "../../assets/types/hyundai.svg";
import Lancer from "../../assets/types/Lancer.svg";
import landRover from "../../assets/types/land-rover.svg";

const CarsLogo = () => {
  const data = [
    { name: bmw, alt: "bmw" },
    { name: fiat, alt: "fiat" },
    { name: Group200, alt: "car" },
    { name: Group203, alt: "car" },
    { name: Group206, alt: "car" },
    { name: Group208, alt: "car" },
    { name: Group209, alt: "car" },
    { name: hyundai, alt: "hyundai" },
    { name: landRover, alt: "landRover" },
    { name: Lancer, alt: "Lancer" },
  ];
  const mobileData = [
    { name: bmw, alt: "bmw" },
    { name: fiat, alt: "fiat" },
    { name: hyundai, alt: "hyundai" },
    { name: landRover, alt: "landRover" },
    { name: Lancer, alt: "Lancer" },
  ];
  return (
    <Container>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return <img src={item.name} alt={item.alt} key={index} />;
        })}
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {mobileData.map((item, index) => {
          return <img src={item.name} alt={item.alt} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default CarsLogo;
