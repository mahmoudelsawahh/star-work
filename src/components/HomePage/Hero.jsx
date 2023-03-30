import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CarRentalIcon from "@mui/icons-material/CarRental";
import EuroIcon from "@mui/icons-material/Euro";
import { useSelector } from "react-redux";

const englishData = {
  welcomeMessage: "welocme to Rysin Car Srls",
  title: "ABOUT Rysin Car Srls  ",
  txt: "rysin car srls is a start-up company that was opened in 2023 and have purchase tax :17053311001 specialized in buying and selling used cars, and its location is in Rome.  ",
  data: [
    {
      name: "Sell cars",
      txt: "Sell ​​your car as quickly, and at the highest price",
      icon: CarCrashIcon,
    },
    {
      name: "Buy cars",
      txt: "You can find out the details of the available cars through the website and then contact us",
      icon: SupportAgentIcon,
    },
    {
      name: "Contact-Us",
      txt: "We can find a used car to your specifications.      ",
      icon: CarRentalIcon,
    },
    {
      name: "Speed",
      txt: "You buy cars online, and you save time.",
      icon: EuroIcon,
    },
  ],
};

const ItalyData = {
  welcomeMessage: "benvenuto in Rysin Car Srls ",
  title: "CHI SIAMO Rysin Car Srls",
  txt: " rysin car srls è una start-up che è stata aperta nel 2023 e ha PARTITA IVA:17053311001 specializzata nella compravendita di auto usate, con sede a Roma.  ",
  data: [
    {
      name: "Vendi auto",
      txt: "Vendi la tua auto il più velocemente possibile e al prezzo più alto",
      icon: CarCrashIcon,
    },
    {
      name: "Compra auto",
      txt: "Puoi scoprire i dettagli delle auto disponibili attraverso il sito Web e quindi contattarci",
      icon: SupportAgentIcon,
    },
    {
      name: "Contattaci",
      txt: "Possiamo trovare un'auto usata secondo le vostre specifiche.      ",
      icon: CarRentalIcon,
    },
    {
      name: "Velocità",
      txt: "Compri auto online e risparmi tempo.      ",
      icon: EuroIcon,
    },
  ],
};

const FransaData = {
  welcomeMessage: "Bienvenue chez Rysin Car Srl  ",
  title: "À PROPOS DE Rysin Car Srl ",
  txt: "rysin car srls est une start-up inaugurée en 2023 avec le numéro de TVA 17053311001 spécialisée dans l'achat et la vente de voitures d'occasion, basée à Rome.  ",
  data: [
    {
      name: "Vendre des voitures      ",
      txt: "Vendez votre voiture au plus vite, et au prix le plus élevé",
      icon: CarCrashIcon,
    },
    {
      name: "Acheter des voitures",
      txt: "Vous pouvez trouver les détails des voitures disponibles sur le site Web, puis nous contacter",
      icon: SupportAgentIcon,
    },
    {
      name: "Contactez-nous",
      txt: "Nous pouvons trouver une voiture d'occasion selon vos spécifications.",
      icon: CarRentalIcon,
    },
    {
      name: "vitesse",
      txt: "Vous achetez des voitures en ligne, et vous gagnez du temps.",
      icon: EuroIcon,
    },
  ],
};

const ArabicData = {
  welcomeMessage: "مرحبا بكم في Rysin Car Srls  ",
  title: "من نحن",
  txt: "rysin car srls هي شركة ناشئة تم افتتاحها عام ٢٠٢٣ وتحمل سجل تجاري رقم ١٧٠٥٣٣١١٠٠١ متخصصة في بيع وشراء السيارات المستعملة ومقرها في روما. ",
  data: [
    {
      name: "بيع السيارات",
      txt: "بيع سيارتك في أسرع وقت ممكن وبأعلى سعر",
      icon: CarCrashIcon,
    },
    {
      name: "شراء السيارات",
      txt: "يمكنك معرفة تفاصيل السيارات المتوفرة من خلال الموقع ومن ثم التواصل معنا",
      icon: SupportAgentIcon,
    },
    {
      name: "اتصل بنا",
      txt: "يمكننا العثور على سيارة مستعملة بناءا علي مواصفاتك .",
      icon: CarRentalIcon,
    },
    {
      name: "السرعة",
      txt: "تشتري السيارات عبر الإنترنت وتوفر الوقت.",
      icon: EuroIcon,
    },
  ],
};

const Hero = () => {
  const language = useSelector((state) => state.LanguageSlice.language);
  const [doneData, setDoneData] = useState(ItalyData);
  useEffect(() => {
    if (language === "italy") {
      return setDoneData(ItalyData);
    } else if (language === "english") {
      return setDoneData(englishData);
    } else if (language === "franca") {
      return setDoneData(FransaData);
    } else if (language === "Arabic") {
      return setDoneData(ArabicData);
    }
  }, [language]);
  return (
    <Box
      sx={{
        direction: language === "Arabic" ? "rtl" : "ltr",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "bold", padding: "3px 0px" }}
          >
            {doneData.welcomeMessage}
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: "#003e70", letterSpacing: "2px", padding: "3px 0px" }}
          >
            {doneData.title}
          </Typography>
          <hr />
          <Typography
            sx={{
              fontSize: "17px",
              textAlign: { xs: "start", md: "center" },
              padding: "10px 0px",
            }}
          >
            {doneData.txt}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ padding: "20px 0px" }}>
          {doneData.data.map((item, index) => {
            return (
              <Grid item lg={3} md={6} xs={12} key={index} marginTop="15px">
                <Box textAlign={"center"}>
                  <IconButton
                    aria-label="fingerprint"
                    color="secondary"
                    sx={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      backgroundColor: "#eee",
                      ":hover": {
                        backgroundColor: "#5d4037",
                        color: "#fff",
                        transition: "ease-in-out 1s",
                      },
                      marginRight: "20px",
                    }}
                  >
                    {<item.icon sx={{ fontSize: "40px" }} />}
                  </IconButton>
                  <Typography
                    variant="h1"
                    sx={{
                      color: "#363636",
                      fontSize: "18px",
                      padding: "17px 0px",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "17px", textAlign: "center" }}>
                    {item.txt}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
