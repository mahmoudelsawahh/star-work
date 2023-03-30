import { createTheme } from "@mui/material";
const Theme = createTheme({
  palette: {
    primary: {
      light: "#795548",
      main: "#5d4037",
      dark: "#6d4c41",
      contrastText: "#fff",
    },
    secondary: {
      light: "#0d50a2",
      main: "#003e70",
      dark: "#121858",
      contrastText: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#003e70",
      fontFamily: "Atkinson Hyperlegible",
    },
    body1: {
      color: "#4a4a4a",
      fontSize: 22,
    },
    body2: {
      color: "#fff",
      fontSize: 22,
    },
    h1: {
      fontSize: 42,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 35,
    },
    h4: {
      fontSize: 30,
    },
    h5: {
      fontSize: 27,
    },
    h6: {
      fontSize: 25,
      fontWeight: "bold",
    },
  },
});
export default Theme;
