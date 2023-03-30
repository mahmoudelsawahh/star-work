import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import banner from "../../assets/ac5dd-02.jpg";
const englishData = {
  subtitle: "buy cars with",
  title: "awarranty",
  txt: "you don't risk anything- we provide a guarantee that the car conforms to the technical description",
  btn: "Discover More",
};
const italyData = {
  subtitle: "Acquisto auto ",
  title: "con garanzia",
  txt: "non rischi nulla, garantiamo che l'auto è conforme alla descrizione tecnica  ",
  btn: "Scopri di più",
};
const francaData = {
  subtitle: "acquisto auto  ",
  title: "Con una garanzia",
  txt: "vous ne risquez rien - nous garantissons que la voiture est conforme à la description technique  ",
  btn: "Découvrir plus",
};
const arabicData = {
  subtitle: "شراء السيارات مع ",
  title: "الضمان",
  txt: "لا تخاطر بأي شيء - نحن نقدم ضمانًا بأن السيارة تتوافق مع الوصف الفني  ",
  btn: "إكتشف المزيد",
};

const SecondSlide = () => {
  const language = useSelector((state) => state.LanguageSlice.language);
  const [CountryData, setCountryData] = useState(italyData);
  useEffect(() => {
    if (language === "italy") {
      return setCountryData(italyData);
    } else if (language === "english") {
      return setCountryData(englishData);
    } else if (language === "franca") {
      return setCountryData(francaData);
    } else if (language === "Arabic") {
      return setCountryData(arabicData);
    }
  }, [language]);
  return (
    <Box
      className="first-banner"
      sx={{
        backgroundPosition:
          language === "Arabic" ? "bottom left" : "center bottom",
        position: "relative",
        backgroundImage: `url(${banner})`,
        height: "100%",
        direction: language === "Arabic" ? "rtl" : "ltr",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
              letterSpacing: language === "Arabic" ? "0px" : "5px",
              fontWeight: "bold",
              textAlign: "start",
            }}
          >
            {CountryData.subtitle}
            <br /> {CountryData.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "30px" },
              fontWeight: "bold",
              letterSpacing: language === "Arabic" ? "0px" : "2px",
              width: { xs: "100%", md: "70%" },
              marginTop: "10px",
              textAlign: "start",
            }}
          >
            {CountryData.txt}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: "30px", padding: "12px 15px", fontWeight: "bold" }}
          >
            {CountryData.btn}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SecondSlide;
