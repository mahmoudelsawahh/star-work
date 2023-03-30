import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Drawer, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CloseIcon from "@mui/icons-material/Close";
import "../../css/Header/Header.css";
import CountryControl from "./CountryControl";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { getLanguageStore } from "../../redux/LanguageSlice";

const AllCountryData = [
  {
    english: [
      { name: "home", id: 1, icon: <HomeIcon />, moveTo: "/" },
      {
        name: "about",
        id: 2,
        icon: <AccessibilityNewIcon />,
        moveTo: "/about-us",
      },
      {
        name: "service",
        id: 3,
        icon: <MiscellaneousServicesIcon />,
        moveTo: "/service",
      },
      {
        name: "find car",
        id: 4,
        icon: <TimeToLeaveIcon />,
        moveTo: "/used-cars",
      },
      { name: "contact", id: 5, icon: <ContactPageIcon />, moveTo: "/contact" },
    ],
    franca: [
      { name: "principale", id: 1, icon: <HomeIcon />, moveTo: "/" },
      {
        name: "sommes-nous",
        id: 2,
        icon: <AccessibilityNewIcon />,
        moveTo: "/about-us",
      },
      {
        name: "service",
        id: 3,
        icon: <MiscellaneousServicesIcon />,
        moveTo: "/service",
      },
      {
        name: "voitures",
        id: 4,
        icon: <TimeToLeaveIcon />,
        moveTo: "/used-cars",
      },
      {
        name: "contactez",
        id: 5,
        icon: <ContactPageIcon />,
        moveTo: "/contact",
      },
    ],
    italy: [
      { name: "principale", id: 1, icon: <HomeIcon />, moveTo: "/" },
      {
        name: "chi siamo",
        id: 2,
        icon: <AccessibilityNewIcon />,
        moveTo: "/about-us",
      },
      {
        name: "Servizi",
        id: 3,
        icon: <MiscellaneousServicesIcon />,
        moveTo: "/service",
      },
      {
        name: "Cerca un'auto",
        id: 4,
        icon: <TimeToLeaveIcon />,
        moveTo: "/used-cars",
      },
      {
        name: "chiamaci",
        id: 5,
        icon: <ContactPageIcon />,
        moveTo: "/contact",
      },
    ],
    Arabic: [
      { name: "الرئيسية", id: 1, icon: <HomeIcon />, moveTo: "/" },
      {
        name: "من نحن",
        id: 2,
        icon: <AccessibilityNewIcon />,
        moveTo: "/about-us",
      },
      {
        name: "الخدمات",
        id: 3,
        icon: <MiscellaneousServicesIcon />,
        moveTo: "/service",
      },
      {
        name: "السيارات",
        id: 4,
        icon: <TimeToLeaveIcon />,
        moveTo: "/used-cars",
      },
      {
        name: "اتصل بنا ",
        id: 5,
        icon: <ContactPageIcon />,
        moveTo: "/contact",
      },
    ],
  },
];

function Header() {
  const dispath = useDispatch();
  const [getCountryData, setGetCountryData] = useState();
  const getLanguage = (countryName) => {
    return setGetCountryData(countryName);
  };
  const [doneData, setDoneData] = useState(AllCountryData[0].italy);

  useEffect(() => {
    const FilterData = () => {
      if (getCountryData === "italy") {
        setDoneData(AllCountryData[0].italy);
      } else if (getCountryData === "english") {
        setDoneData(AllCountryData[0].english);
      } else if (getCountryData === "franca") {
        setDoneData(AllCountryData[0].franca);
      } else if (getCountryData === "Arabic") {
        setDoneData(AllCountryData[0].Arabic);
      }
    };
    dispath(getLanguageStore(getCountryData));
    FilterData();
  }, [getCountryData]);

  const contacts = [
    {
      data: "VIALE DELLA BELLA VILLA 6800172 ROMA RM",
      icon: <PlaceIcon />,
      path: "/",
    },
    { data: "+393779452678", icon: <PhoneIcon />, path: "/" },
    { data: "17053311001", icon: <ApartmentIcon />, path: "/" },
    { data: "raysincarsris@legalmail.it", icon: <MailIcon />, path: "/" },
  ];
  const socialIcons = [
    { name: "FacebookIcon", icon: <FacebookIcon /> },
    { name: "InstagramIcon", icon: <InstagramIcon /> },
    { name: "TwitterIcon", icon: <TwitterIcon /> },
  ];
  const getList = () => (
    <div
      className="mobiLe-app-bar"
      style={{ width: 350 }}
      onClick={() => setOpenDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
          borderBottomStyle: "inset",
          marginBottom: "15px",
        }}
      >
        <Typography variant="h6">Menu</Typography>
        <IconButton aria-label="delete" size="large" color="error">
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
      <Box>
        {doneData.map((item, index) => (
          <NavLink to={item.moveTo} key={index}>
            <ListItem button>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                startIcon={item.icon}
              >
                {item.name}
              </Button>
            </ListItem>
          </NavLink>
        ))}
      </Box>
      <Box>
        <Box
          sx={{
            borderBottom: "1px solid #ddd",
            borderBottomStyle: "inset",
            margin: "30px 0px",
          }}
        >
          <Typography variant="h6">Country</Typography>
        </Box>
        <CountryControl getCountryName={getLanguage} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
          borderBottomStyle: "inset",
          margin: "25px 0px",
        }}
      >
        <Typography variant="h6">Info</Typography>
        <IconButton aria-label="info" size="large" color="secondary">
          <InfoIcon fontSize="medium" />
        </IconButton>
      </Box>
      {/* ------------------------------------------------------------------------------------------------------------------------------ */}
      <Box sx={{ marginBottom: "20px" }}>
        {contacts.map((item, index) => {
          return (
            <Box key={index}>
              {/* <NavLink to={item.path} key={index}> */}
              <ListItem button>
                <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  startIcon={item.icon}
                >
                  {item.data}
                </Button>
              </ListItem>
              {/* </NavLink> */}
            </Box>
          );
        })}
      </Box>
      <Box
        className="flexBox"
        sx={{ justifyContent: "space-around", marginBottom: "10px" }}
      >
        {socialIcons.map((item, index) => {
          return (
            <IconButton
              aria-label={item}
              size="large"
              color="secondary"
              key={index}
            >
              {item.icon}
            </IconButton>
          );
        })}
      </Box>
    </div>
  );
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static" sx={{ height: "fit-content" }}>
      <Container>
        <Box
          sx={{
            borderRadius: "8px",
            backgroundColor: "#8d6e63",
            padding: "5px 3px",
            color: "#fff",

            fontWeight: "bold",
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box className="flexBox">
            <Button
              sx={{
                marginRight: "25px",

                color: "#fff",
                display: { xs: "none", lg: "flex" },
                ":hover": {
                  backgroundColor: "#6d4c41",
                },
              }}
              variant="text"
              startIcon={<PlaceIcon />}
            >
              VIALE DELLA BELLA VILLA 6800172 ROMA RM
            </Button>
            <Button
              sx={{
                marginRight: "25px",

                color: "#fff",
                ":hover": {
                  backgroundColor: "#6d4c41",
                },
              }}
              variant="text"
              startIcon={<PhoneIcon />}
            >
              +393779452678
            </Button>
            <Button
              sx={{
                marginRight: "25px",

                color: "#fff",
                ":hover": {
                  backgroundColor: "#6d4c41",
                },
              }}
              variant="text"
              startIcon={<ApartmentIcon />}
            >
              17053311001
            </Button>

            <Button
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "#6d4c41",
                },
              }}
              variant="text"
              startIcon={<MailIcon />}
            >
              raysincarsris@legalmail.it
            </Button>
          </Box>
          <Box className="flexBox">
            <IconButton sx={{ color: "#fff" }} aria-label="FacebookIcon">
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }} aria-label="InstagramIcon">
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }} aria-label="TwitterIcon">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>

        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* //////////////////////////////////////// */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "100%", md: "auto" },
            }}
          >
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => {
                  setOpenDrawer(true);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={openDrawer}
                anchor={"left"}
                onClose={() => setOpenDrawer(false)}
              >
                <Box
                  style={{ width: 350 }}
                  onClick={() => setOpenDrawer(false)}
                >
                  {getList()}
                </Box>
              </Drawer>
            </Box>
          </Box>
          {/* -------------------------------- */}
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {doneData.map((item, index) => {
                return (
                  <NavLink to={item.moveTo} key={index}>
                    <Button
                      color="success"
                      sx={{
                        my: 2,
                        color: "#fff",
                        display: "flex",
                        mr: { md: 1, lg: 3 },
                        padding: "8px 9px",
                        fontWeight: 600,
                      }}
                      startIcon={item.icon}
                    >
                      {item.name}
                    </Button>
                  </NavLink>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CountryControl getCountryName={getLanguage} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
