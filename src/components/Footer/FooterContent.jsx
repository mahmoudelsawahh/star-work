import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const FooterContent = () => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Typography variant="h1" sx={{ color: "#fff" }}>
            Logo
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "1rem", color: "#999999", fontSize: "16px" }}
          >
            We provide everything you need to build an amazing dealership
            website developed especially for car sellers dealers or auto motor
            retailers.
          </Typography>
          <Box>
            <Button
              variant="text"
              sx={{ color: "#999999", padding: "2px 0px", marginTop: "4px" }}
              startIcon={<PhoneIcon />}
            >
              (+393)779452678
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{ color: "#999999", padding: "2px 0px", marginTop: "4px" }}
              startIcon={<EmailIcon />}
            >
              raysincarsris@legalmail.it
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              sx={{ color: "#999999", padding: "2px 0px", marginTop: "4px" }}
              startIcon={<LocationOnIcon />}
            >
              VIALE DELLA 6800172 ROMA RM
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontSize: "18px", color: "#fff" }}>
            USEFUL LINKS
          </Typography>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",

                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              hello world
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              hello world
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",

                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              hello world
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              hello world
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontSize: "18px", color: "#fff" }}>
            TOP MODELS
          </Typography>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              OPEL ASTRA
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              MERCEDES CLASSE C
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              BMW SERIE 3
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              VOLKSWAGEN GOLF
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontSize: "18px", color: "#fff" }}>
            COMPANY
          </Typography>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              About US
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                padding: "10px 0px",
                margin: "10px 0px",
                fontWeight: 600,
                borderBottom: "1px solid #52525278",
                color: "#999999",
                ":hover": {
                  transition: "ease-in-out 1s",
                  color: "red",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterContent;
