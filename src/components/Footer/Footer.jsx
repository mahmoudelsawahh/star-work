import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FooterContent from "./FooterContent";
import SocialMediaComponent from "./SocialMedia";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#212529" }}>
      <Container>
        <Box>
          <SocialMediaComponent />
        </Box>
        <FooterContent />
      </Container>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          marginTop: "15px",
          padding: "15px 0px",
          fontSize: "11px",
          backgroundColor: "#00000021",
        }}
      >
        ©Copyright 2023 RYSIN CAR SRLS Developed by mahmoud elsawah
      </Typography>
    </footer>
  );
};

export default Footer;
