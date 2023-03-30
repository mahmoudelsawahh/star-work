import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../../css/Footer/Footer.css";
const data = [
  { name: "FACEBOOK", icon: FacebookIcon, color: "#4267B2" },
  { name: "TWITTER", icon: TwitterIcon, color: "#1DA1F2" },
  { name: "INSTAGRAM", icon: InstagramIcon, color: "#405DE6  " },
  { name: "WhatsApp", icon: WhatsAppIcon, color: "#25D366" },
];
const SocialMediaComponent = () => {
  return (
    <Box className="socialMedia">
      <Grid container spacing={2}>
        {data.map((item, index) => {
          return (
            <Grid item xs={6} sm={3} key={index}>
              <Box
                className="socialMedia"
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    transition: "ease-in-out 1s",
                    backgroundColor: item.color,
                  },
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontSize: "18px" }}
                  variant="body2"
                >
                  {item.name}
                </Typography>
                <IconButton aria-label="social-Media" sx={{ color: "#fff" }}>
                  {<item.icon sx={{ fontSize: "30px", color: "#ddd" }} />}
                </IconButton>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SocialMediaComponent;
