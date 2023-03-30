import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Hero1 from "../components/HomePage/Hero1";
import Hero2 from "../components/HomePage/Hero2";
import Hero3SliderImage from "../components/HomePage/Hero3SliderImage";
import Convertible from "../assets/hero-3/Convertible-car.jpg";
import coube from "../assets/hero-3/coube-car.jpg";
import Minivan from "../assets/hero-3/Minivan-car.jpg";
import Pickups from "../assets/hero-3/Pickups-car.jpg";
import Sedan from "../assets/hero-3/Sedan-car.jpg";
import Sport from "../assets/hero-3/Sport Cars.jpg";
import SUV from "../assets/hero-3/SUV-car.jpg";
import hatchback from "../assets/hero-3/hatchback-car.jpg";
import SliderComponent from "../components/HomePage/SliderComponent";
import Hero3ForMobile from "../components/HomePage/Hero3ForMobile";
import SellingCar from "../components/HomePage/SellingCar";
import Hero from "../components/HomePage/Hero";
import Review from "../components/HomePage/Review";
import ReviewForMobile from "../components/HomePage/ReviewForMobile";
import imageReview1 from "../assets/hero-3/review-1.jpg";
import imageReview2 from "../assets/hero-3/review-2.jpg";
import imageReview3 from "../assets/hero-3/review-3.jpg";
import imageClient1 from "../assets/hero-3/review-client-1.jpg";
import imageClient2 from "../assets/hero-3/review-client-2.jpg";
import imageClient3 from "../assets/hero-3/review-client-3.jpg";
import imageClient4 from "../assets/hero-3/review-client-4.jpg";
import FindUs from "../components/HomePage/FindUs";
import Footer from "../components/Footer/Footer";
import cardBanner from "../assets/wrapper-section-01.png";
import CarsLogo from "../components/HomePage/CarsLogo";
import { useSelector } from "react-redux";
const data = [
  { name: "Convertible", img: Convertible },
  { name: "coube", img: coube },
  { name: "Minivan", img: Minivan },
  { name: "Pickups", img: Pickups },
  { name: "Sedan", img: Sedan },
  { name: "Sport", img: Sport },
  { name: "SUV", img: SUV },
  { name: "hatchback", img: hatchback },
];
const ReviewData = [
  {
    name: "Felica Queen",
    txt: "Traitement très agréable par Rysin. Ils m'ont tenu au courant tout le temps, ont livré la voiture à temps et en parfait état. Super.",
    img: imageReview1,
    clientImage: imageClient1,
  },
  {
    name: "Alice Williams",
    txt: "La macchina è fantastica, l'atteggiamento di Rysin è sempre stato lo stesso, sono soddisfatto e la userò sicuramente di nuovo la prossima volta.    ",
    img: imageReview2,
    clientImage: imageClient2,
  },
  {
    name: "Michael Bean",
    txt: "Ottimo affare e ottimo servizio. Sono soddisfatto del mio acquisto di Rysin e posso consigliarlo in base alla mia esperienza.",
    img: imageReview3,
    clientImage: imageClient3,
  },
  {
    name: "Sara Lisbon",
    txt: "This was my first car purchase ever, Thank you for the great help and I wish many happy customers.    ",
    img: coube,
    clientImage: imageClient4,
  },
];

const EnglishDataReviewAndCar = {
  titleVehicle: "Types of Vehicle",
  titleReview: "OUR TESTIMONIAL",
  subTitleReview: "What Our Happy Clients say about us",
};
const italyDataReviewAndCar = {
  titleVehicle: "Tipi di veicoli  ",
  titleReview: "LA NOSTRA TESTIMONIANZA  ",
  subTitleReview: "Cosa dicono di noi i nostri clienti soddisfatti  ",
};
const francDataReviewAndCar = {
  titleVehicle: "Types de véhicules  ",
  titleReview: "NOTRE TÉMOIGNAGE  ",
  subTitleReview: "Ce que nos clients satisfaits disent de nous",
};
const arabicDataReviewAndCar = {
  titleVehicle: "أنواع المركبات",
  titleReview: "الاراء",
  subTitleReview: "ماذا يقول عملاؤنا الراضون عنا  ",
};
const HomePage = () => {
  const language = useSelector((state) => state.LanguageSlice.language);
  const [doneData, setDoneData] = useState(italyDataReviewAndCar);
  useEffect(() => {
    if (language === "italy") {
      return setDoneData(italyDataReviewAndCar);
    } else if (language === "english") {
      return setDoneData(EnglishDataReviewAndCar);
    } else if (language === "franca") {
      return setDoneData(francDataReviewAndCar);
    } else if (language === "Arabic") {
      return setDoneData(arabicDataReviewAndCar);
    }
  }, [language]);

  return (
    <>
      <SliderComponent />
      <Box sx={{ backgroundImage: `url(${cardBanner})` }}>
        <section style={{ backgroundColor: "#f7f7f796" }}>
          <CarsLogo />
        </section>
        <section>
          <Hero />
        </section>

        <section>
          <Hero1 />
        </section>

        <section>
          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{ marginBottom: "50px" }}
          >
            {doneData.titleVehicle}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Hero3SliderImage data={data} />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Hero3ForMobile data={data} />
          </Box>
        </section>
        <section>
          <Hero2 />
        </section>
        <section>
          <SellingCar />
        </section>
        <section style={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "13px", md: "16px" },
              fontWeight: "bold",
              padding: "5px 0px",
            }}
          >
            {doneData.subTitleReview}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "42px" },
              color: "#363636",
              letterSpacing: "2px",
              padding: "5px 0px",
            }}
          >
            {doneData.titleReview}
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
                backgroundImage: `url(${cardBanner})`,
                marginTop: "30px",
              },
            }}
          >
            <Review data={ReviewData} />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <ReviewForMobile data={ReviewData} />
          </Box>
        </section>
        <section>
          <FindUs />
        </section>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
