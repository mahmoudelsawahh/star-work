import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import banner from "../../assets/wrapper-section-01.png";
import { useSelector } from "react-redux";
const englishData = {
  title: "Get in Touch",
  subTitle: "Contact our Sales Departament  ",
  number: "(+393)779452678",
  dataDay: [
    { name: "Saturday", time: "9:00-13:00" },
    { name: "Monday", time: "9:00-13:00" },
    { name: "Tuesday", time: "9:00-13:00" },
    { name: "Wednesday", time: "9:00-13:00" },
    { name: "Thursday", time: "9:00-13:00" },
    { name: "Friday", time: "9:00-13:00" },
    { name: "Sunday", time: "CLOSED" },
  ],
};
const italyData = {
  title: "Mettiti in contatto  ",
  subTitle: "Contatta il nostro Ufficio Commerciale  ",
  number: "(+393)779452678",
  dataDay: [
    { name: "Sabato", time: "9:00-13:00" },
    { name: "Lunedi", time: "9:00-13:00" },
    { name: "Martedì", time: "9:00-13:00" },
    { name: "Mercoledì", time: "9:00-13:00" },
    { name: "Giovedì    ", time: "9:00-13:00" },
    { name: "Venerdì", time: "9:00-13:00" },
    { name: "Domenica", time: "CHIUSO" },
  ],
};
const francData = {
  title: "Entrer en contact  ",
  subTitle: "Contactez notre service commercial  ",
  number: "(+393)779452678",
  dataDay: [
    { name: "Samedi", time: "9:00-13:00" },
    { name: "Lundi", time: "9:00-13:00" },
    { name: "Mardi", time: "9:00-13:00" },
    { name: "Mercredi", time: "9:00-13:00" },
    { name: "Jeudi", time: "9:00-13:00" },
    { name: "Vendredi", time: "9:00-13:00" },
    { name: "Dimanche", time: "fermé" },
  ],
};
const arabicData = {
  title: "ابقى على تواصل",
  subTitle: "اتصل بقسم المبيعات لدينا",
  number: "(+٣٩٣) ٧٧٩٤٥٢٦٧٨",
  dataDay: [
    { name: "السبت", time: "9:00-13:00" },
    { name: "الاثنين", time: "9:00-13:00" },
    { name: "الثلاثاء", time: "9:00-13:00" },
    { name: "الأربعاء", time: "9:00-13:00" },
    { name: "الخميس", time: "9:00-13:00" },
    { name: "الجمعة", time: "9:00-13:00" },
    { name: "الأحد", time: "مغلق" },
  ],
};
const FindUs = () => {
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
  // ------------------------------------
  const { isLoaded } = useLoadScript({
    gooleMapsApiKey: "AIzaSyD8VnCeffTKaA9ope5meiBoVbX16geiPkY",
  });
  const x = () => {
    if (isLoaded) {
      return (
        <GoogleMap
          zoom={10}
          center={{ lat: 44, lng: -80 }}
          mapContainerClassName="mapContainer"
        >
          <Marker position={{ lat: 44, lng: -80 }} />
        </GoogleMap>
      );
    }
  };
  return (
    <Box sx={{ backgroundImage: `url(${banner})`, position: "relative" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: "15px 10px",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography variant="h1" sx={{ letterSpacing: "3px" }}>
                {doneData.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "5d4037",
                  padding: "10px 4px",
                  fontSize: { xs: "17px", md: "18px" },
                }}
              >
                {doneData.subTitle}
              </Typography>
              <Typography
                sx={{
                  color: "#5d4037",
                  marginBottom: "20px",
                  letterSpacing: "2px",
                  fontSize: { xs: "30px", md: "42px" },
                }}
                variant="h1"
              >
                {doneData.number}
              </Typography>
              {doneData.dataDay.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: { xs: "100%", md: "60%" },
                    }}
                  >
                    <Typography sx={{ marginBottom: "5px" }}>
                      {item.name} :
                    </Typography>
                    <Typography>{item.time}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "500px", md: "100%" },
              height: { xs: "500px", md: "100%" },
              position: { xs: "static", md: "absolute" },
              right: 0,
            }}
          >
            {x()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FindUs;
