import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import banner from "../../assets/three-slide.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";

const englishData = {
  title: "Buy and Sell the latest used cars for the fairest prices.",
  txt: "Passenger cars, vans, light trucks and even margin cars or damagedvehicles, you’re sure to find what you’re looking for.",
  firstBtn: "+393779452678",
  secondBtn: "Contact Us",
};
const italyData = {
  title: "Acquista e vendi le ultime auto usate ai prezzi più equi.  ",
  txt: "Autovetture, furgoni, autocarri leggeri e persino auto marginali o veicoli danneggiati, troverai sicuramente quello che stai cercando.",
  firstBtn: "+393779452678",
  secondBtn: "chiamaci",
};
const francaData = {
  title:
    "Achetez et vendez les dernières voitures d'occasion aux prix les plus bas.",
  txt: "Voitures de tourisme, fourgonnettes, camions légers et même voitures à marge ou véhicules accidentés, vous êtes sûr de trouver ce que vous cherchez.  ",
  firstBtn: "+393779452678",
  secondBtn: "Contactez-nous",
};
const arabicData = {
  title: "بيع وشراء أحدث السيارات المستعملة بأقل الأسعار",
  txt: "سيارات الركاب والشاحنات الصغيرة والشاحنات الخفيفة وحتى سيارات الهامش أو المركبات التالفة ، فمن المؤكد أنك ستجد ما تبحث عنه.",
  firstBtn: "+٣٩٣٧٧٩٤٥٢٦٧٨",
  secondBtn: "اتصل بنا  ",
};

const SliderThree = () => {
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
              fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
              letterSpacing: language === "Arabic" ? "0px" : "2px",
              fontWeight: "bold",
              textAlign: "start",
              width: { xs: "100%", md: "80%" },
            }}
          >
            {CountryData.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize:
                language === "Arabic" ? { xs: "22px", md: "30px" } : "22px",
              fontWeight: "bold",
              letterSpacing: language === "Arabic" ? "0px" : "2px",
              width: { xs: "100%", md: "70%" },
              marginTop: "10px",
              color: "#795548",
            }}
          >
            {CountryData.txt}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-between",
                md: language === "Arabic" ? "flex-end" : "flex-start",
              },
              alignItems: "center",
              width: "100%",
              marginTop: "30px",
              direction: "ltr",
            }}
          >
            <Button
              sx={{
                color: "#3e2723",
                backgroundColor: "#fff",
                fontWeight: "bold",
                margin: { xs: 0, md: "0px 20px" },
                ":hover": {
                  color: "#fff",
                },
              }}
              variant="contained"
              startIcon={<PhoneIcon />}
            >
              {CountryData.firstBtn}
            </Button>

            <Button
              sx={{ fontWeight: "bold" }}
              variant="contained"
              startIcon={<EmailIcon />}
            >
              {CountryData.secondBtn}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SliderThree;
