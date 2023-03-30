import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import banner from "../../assets/car-offer-banner.jpeg";
import { useSelector } from "react-redux";

const englishData = {
  title:
    "Looking to quickly sell your car online, You’ve come to the right place!",
  txt: "If you’re wondering how to go about selling your car, we’re here to help you find the ideal way to maximise the return for your current vehicle.",
  btn: "submit your vehicle now",
};
const italyData = {
  title:
    "Stai cercando di vendere rapidamente la tua auto online, sei nel posto giusto!",
  txt: "Se ti stai chiedendo come vendere la tua auto, siamo qui per aiutarti a trovare il modo ideale per massimizzare il ritorno per il tuo veicolo attuale.  ",
  btn: "Invia ora la tua auto",
};
const francData = {
  title:
    "Vous cherchez à vendre rapidement votre voiture en ligne, vous êtes au bon endroit !    ",
  txt: "Si vous vous demandez comment vendre votre voiture, nous sommes là pour vous aider à trouver le moyen idéal de maximiser le rendement de votre véhicule actuel.",
  btn: "Soumettez votre voiture maintenant  ",
};
const arabicData = {
  title:
    "إذا كنت تبحث عن بيع سيارتك بسرعة عبر الإنترنت ، فقد وصلت إلى المكان الصحيح!",
  txt: "إذا كنت تتساءل عن كيفية بيع سيارتك ، فنحن هنا لمساعدتك في العثور على الطريقة المثلى لتعظيم العائد على سيارتك الحالية.  ",
  btn: "قدم سيارتك الآن  ",
};
const SellingCar = () => {
  const language = useSelector((state) => state.LanguageSlice.language);
  const [Data, setData] = useState(italyData);
  useEffect(() => {
    if (language === "italy") {
      return setData(italyData);
    } else if (language === "english") {
      return setData(englishData);
    } else if (language === "franca") {
      return setData(francData);
    } else if (language === "Arabic") {
      return setData(arabicData);
    }
  }, [language]);

  return (
    <Box
      className="first-banner"
      sx={{ backgroundImage: `url(${banner})`, height: "600px" }}
    >
      <Container maxWidth="md" sx={{ height: "100%" }}>
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{ color: "#fff", fontSize: { xs: "35px", md: "42px" } }}
          >
            {Data.title}
          </Typography>
          <Typography variant="body2" sx={{ margin: "30px 0px" }}>
            {Data.txt}
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                padding: "12px 15px",
                fontWeight: "bold",
              }}
              color="error"
              startIcon={<ContactMailIcon />}
            >
              {Data.btn}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SellingCar;
