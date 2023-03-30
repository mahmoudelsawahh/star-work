import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const englishData = {
  title: "What Makes Us",
  firstSubTitle: " Special ",
  txt: " Rysin car srls is not only a company with a wide range of used cars. It's a service that makes car buying safe and fast - you can have the vehicles you need in stock within a few days. We also offer you the service of exchanging your old car for a new one It would be easier to contact the company at (00393472534330)",
  btnTxt: "READ MORE",
  subTitles: [
    { name: "We’re Here When You Need Us" },
    { name: "Above Average Cars, Below Average Prices" },
    { name: "We have kept costs to a minimum" },
    { name: "Sell Us Your Car Without The Hassle" },
  ],
};
const arabicData = {
  title: "ما الذي يجعلنا",
  firstSubTitle: " مميزين ",
  txt: "Rysin Car srls ليست فقط شركة لديها مجموعة واسعة من السيارات المستعملة. إنها خدمة تجعل شراء السيارة آمنًا وسريعًا - يمكنك الحصول على المركبات التي تحتاجها في المخزون في غضون أيام قليلة. كما نقدم لك خدمة استبدال سيارتك القديمة بأخرى جديدة وسيكون من الأسهل التواصل مع الشركة على (٠٠٣٩٣٤٧٢٥٣٤٣٣٠)  ",
  btnTxt: "المزيد",
  subTitles: [
    { name: "نحن هنا عندما تحتاج إلينا" },
    { name: "فوق متوسط ​​السيارات ، أقل من متوسط ​​الأسعار" },
    { name: "لقد أبقينا التكاليف عند الحد الأدنى" },
    { name: "بيع سيارتك دون عناء" },
  ],
};
const italyData = {
  title: "Cosa ci rende  ",
  firstSubTitle: " speciali ",
  txt: " Rysin Car srls non è solo un'azienda con una vasta gamma di auto usate. È un servizio che rende l'acquisto di auto sicuro e veloce: puoi avere i veicoli di cui hai bisogno in stock in pochi giorni. Ti offriamo anche il servizio di permuta della tua vecchia auto con una nuova Sarebbe più facile contattare l'azienda al numero (00393472534330)  ",
  btnTxt: "Per saperne di più",
  subTitles: [
    { name: "Siamo qui quando hai bisogno di noi" },
    { name: "Auto sopra la media, prezzi sotto la media" },
    { name: "Abbiamo mantenuto i costi al minimo" },
    { name: "Vendi la tua auto senza fatica" },
  ],
};
const fransaData = {
  title: "Qu'est-ce qui nous fait  ",
  firstSubTitle: " Spéciale",
  txt: " Rysin car srls n'est pas seulement une entreprise avec une large gamme de voitures d'occasion. C'est un service qui rend l'achat de voitures sûr et rapide - vous pouvez avoir les véhicules dont vous avez besoin en stock en quelques jours. Nous vous proposons également le service d'échange de votre ancienne voiture contre une neuve, et il sera plus facile de contacter l'entreprise au (00393472534330)  ",
  btnTxt: "EN SAVOIR PLUS",
  subTitles: [
    { name: "Nous sommes là quand vous avez besoin de nous" },
    { name: "Voitures supérieures à la moyenne, prix inférieurs à la moyenne" },
    { name: "Nous avons réduit les coûts au minimum" },
    { name: "Vendez votre voiture sans effort" },
  ],
};

const ContentHero1 = () => {
  const language = useSelector((state) => state.LanguageSlice.language);
  const [Data, setData] = useState(italyData);
  useEffect(() => {
    if (language === "italy") {
      return setData(italyData);
    } else if (language === "english") {
      return setData(englishData);
    } else if (language === "franca") {
      return setData(fransaData);
    } else if (language === "Arabic") {
      return setData(arabicData);
    }
  }, [language]);

  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: { xs: "35px", md: "42px" } }}>
        {Data.title}
        <span style={{ color: "#5d4037" }}>{Data.firstSubTitle}</span>
      </Typography>
      <hr
        style={{
          width: "30%",
          margin: "25px 0px",
        }}
        color="#555555"
      />
      <Typography variant="body1" sx={{ marginBottom: "30px" }}>
        {Data.txt}
      </Typography>
      <Box sx={{ opacity: "0.9" }}>
        {Data.subTitles.map((item, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "10px 0px",
              }}
              key={index}
            >
              <CheckCircleIcon
                color="success"
                sx={{ fontSize: "20px", margin: "0px 10px" }}
              />
              <Typography
                sx={{
                  marginLeft: { xs: "15px", sm: " 30px" },
                  fontSize: "20px",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Button
        sx={{ padding: "10px 30px", marginTop: "30px", fontSize: "15px" }}
        variant="contained"
      >
        {Data.btnTxt}
      </Button>
    </Box>
  );
};

export default ContentHero1;
