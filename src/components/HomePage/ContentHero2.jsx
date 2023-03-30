import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SellIcon from "@mui/icons-material/Sell";
import { useSelector } from "react-redux";

const englishData = {
  title: "What We Offer ?",
  data: [
    {
      name: "what do you gain",
      txt: "With Rysin Car Srls you will make the best possible purchase of used cars",
      icon: DirectionsCarIcon,
    },
    {
      name: "How does it work",
      txt: "Find the right car for you. Then call us at (00393779452678)    ",
      icon: SellIcon,
    },
    {
      name: "Searching for cars on request",
      txt: "We can find a used car to your specifications when you contact us    ",
      icon: PublishedWithChangesIcon,
    },
  ],
};
const italyData = {
  title: "Cosa offriamo ?",
  data: [
    {
      name: "Cosa guadagni",
      txt: "Con Rysin Car Srls farai il miglior acquisto di auto usate possibile",
      icon: DirectionsCarIcon,
    },
    {
      name: "Come funziona",
      txt: "Trova l'auto giusta per te. Allora chiamaci al (00393779452678)",
      icon: SellIcon,
    },
    {
      name: "Cerca auto su richiesta",
      txt: "Possiamo trovare un'auto usata secondo le tue specifiche quando ci contatti",
      icon: PublishedWithChangesIcon,
    },
  ],
};
const fransData = {
  title: "Ce que nous offrons ?",
  data: [
    {
      name: "qu'est-ce que tu gagnes",
      txt: "Avec Rysin Car Srls, vous ferez le meilleur achat possible de voitures d'occasion",
      icon: DirectionsCarIcon,
    },
    {
      name: "Comment ça marche",
      txt: "Trouvez la voiture qui vous convient. Alors appelez-nous au (00393779452678)   ",
      icon: SellIcon,
    },
    {
      name: "Recherche de voitures sur demande",
      txt: "Nous pouvons trouver une voiture d'occasion selon vos spécifications lorsque vous nous contactez      ",
      icon: PublishedWithChangesIcon,
    },
  ],
};
const arabicData = {
  title: "ماذا نقدم ؟",
  data: [
    {
      name: "ماذا تربح",
      txt: "مع Rysin Car Srls ستحقق أفضل شراء ممكن للسيارات المستعملة",
      icon: DirectionsCarIcon,
    },
    {
      name: "كيف تعمل",
      txt: "اعثر على السيارة المناسبة لك. ثم اتصل بنا على (٠٠٣٩٣٧٧٩٤٥٢٦٧٨)   ",
      icon: SellIcon,
    },
    {
      name: "البحث عن السيارة عند الطلب",
      txt: "يمكننا العثور على سيارة مستعملة وفقًا لمواصفاتك عند الاتصال بنا",
      icon: PublishedWithChangesIcon,
    },
  ],
};
const ContentHero2 = () => {
  const language = useSelector((state) => state.LanguageSlice.language);

  const [doneData, setDoneData] = useState(italyData);
  useEffect(() => {
    if (language === "italy") {
      return setDoneData(italyData);
    } else if (language === "english") {
      return setDoneData(englishData);
    } else if (language === "franca") {
      return setDoneData(fransData);
    } else if (language === "Arabic") {
      return setDoneData(arabicData);
    }
  }, [language]);

  return (
    <Box
      sx={{
        marginRight: language === "Arabic" ? "50px" : "0px",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "35px", md: "42px" }, letterSpacing: "2px" }}
      >
        {doneData.title}
      </Typography>
      <hr
        style={{
          width: "30%",
          margin: "25px 0px",
        }}
        color="#555555"
      />
      {doneData.data.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: "40px",
            }}
          >
            <IconButton
              aria-label="fingerprint"
              color="secondary"
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "#795548",
                ":hover": {
                  backgroundColor: "#5d4037",
                },
                color: "#fff",
                margin:
                  language === "Arabic"
                    ? "0px 0px 0px 20px"
                    : "0px 20px 0px 0px",
              }}
            >
              <item.icon sx={{ fontSize: "40px" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "22px" }}>
                {item.name}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                {item.txt}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ContentHero2;
