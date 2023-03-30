import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import banner from "../../assets/wrapper-section-01.png";
import ContentHero1 from "./ContentHero1";
import ImageHero from "./ImageList";

const Hero1 = () => {
  const language = useSelector((state) => state.LanguageSlice.language);

  return (
    <Box
      className="first-banner"
      sx={{
        position: "relative",
        backgroundImage: `url(${banner})`,
        display: "flex",
        alignItems: "center",
        direction: language === "Arabic" ? "rtl" : "ltr",
      }}
    >
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <ImageHero />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentHero1 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero1;
