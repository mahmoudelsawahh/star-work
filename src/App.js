import { Box, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import UsedCar from "./pages/UsedCar";
import { store } from "./redux/Store";
import Theme from "./Theme/CustomTheme";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <div>
            {loading ? (
              <h1>Loading......?</h1>
            ) : (
              <Box className="layout">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutPage />} />
                    <Route path="/used-cars" element={<UsedCar />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </main>
              </Box>
            )}
          </div>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
