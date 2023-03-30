import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import banner from "../../assets/s.jpg";

const englishData = {
  subTitle: "Welcome in Rysin Car",
  title: "Best Way To Find Your Dream Car",
  txt: "makes selling and buying used cars easy, Rysin Car Srls is the easiest way to sell and buy new car Do not hesitate to contact us",
  firstButton: "find car",
  secondButton: "contact us",
};
const italyData = {
  subTitle: "Benvenuti al Rysin Motor Show",
  title: "Il modo migliore per trovare l'auto dei tuoi sogni",
  txt: "Semplifica l'acquisto e la vendita di auto, Rysin Car Srls è il modo più semplice per vendere o acquistare una nuova auto. non esitate a chiamarci",
  firstButton: "Trova un'auto",
  secondButton: "Contattaci",
};
const francaData = {
  subTitle: "Bienvenue chez Rysin Car",
  title: "La meilleure façon de trouver la voiture de vos rêves",
  txt: "Acheter et vendre des voitures d'occasion est facile Rysin Car Srls est le moyen le plus simple d'acheter et de vendre une voiture neuve N'hésitez pas à nous contacter",
  firstButton: "les voitures",
  secondButton: "Contactez",
};
const arabicData = {
  subTitle: "مرحبًا بكم في معرض Rysin للسيارات",
  title: "أفضل طريقة للعثور على سيارة أحلامك",
  txt: "نجعل بيع وشراء السيارات  أمرًا سهلاً ، Rysin Car Srls هي أسهل طريقة لبيع او شراء سياره جديده. لا تتردد في الاتصال بنا",
  firstButton: "السيارات",
  secondButton: "اتصل بنا",
};
const LandingComponent = () => {
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
        direction: language === "Arabic" ? "rtl" : "ltr",
        height: "100%",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: { xs: "50%", md: "50%" },
            left: "50%",
            transform: {
              xs: "translate(-50%,-55%)",
              lg: `translate(-50%, -60%)`,
            },
            backgroundColor: "#bdbdbd78",
            padding: { md: "0px 5px", lg: "50px 20px" },
            width: { xs: "90%", sm: "92%", md: "auto" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#6d4c41",
              width: "100%",
              fontWeight: "bold",
              paddingBottom: "10px",
              fontStyle: "italic",
              lineHeight: language === "Arabic" ? "55px" : "auto",
              fontSize: { xs: "25px", md: "30px" },
            }}
          >
            {CountryData.subTitle}
          </Typography>
          <Typography
            sx={{
              color: "aliceblue",
              fontWeight: "bold",
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: language === "Arabic" ? "55px" : "auto",
              fontSize: { xs: "30px", md: "42px" },
            }}
            variant="h1"
          >
            {CountryData.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "20px", md: "27px" },
              fontWeight: "bold",
              letterSpacing: "1px",
              padding: "15px 12px",
            }}
          >
            {CountryData.txt}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              margin: "15px",
            }}
          >
            <Button
              sx={{
                color: "#3e2723",
                backgroundColor: "#fff",
                fontWeight: "bold",
                ":hover": {
                  color: "#fff",
                },
              }}
              variant="contained"
            >
              {CountryData.firstButton}
            </Button>

            <Button sx={{ fontWeight: "bold" }} variant="contained">
              {CountryData.secondButton}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingComponent;
