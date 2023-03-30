import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import offersCar from "../../assets/types/istockphoto-1150425295-170667a.jpg";
import ContentHero2 from "./ContentHero2";
const Hero2 = () => {
  const language = useSelector((state) => state.LanguageSlice.language);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        direction: language === "Arabic" ? "rtl" : "ltr",
      }}
    >
      <Container>
        <Grid container columnSpacing={12} rowSpacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: {
                xs: "none",
                md: `url(${offersCar})`,
                backgroundRepeat: "no-repeat",
              },
              backgroundPosition: "center",
            }}
          >
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <img src={offersCar} alt="car" width={"100%"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentHero2 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero2;
