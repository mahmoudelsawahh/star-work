import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ItalyFlag from "../../assets/italy-flag-icon.svg";
import FrancaFlag from "../../assets/2560px-Flag_of_France_(bordered).svg.png";
import AmericaFlag from "../../assets/Flag_of_the_United_States.svg.png";
import ArabicFlag from "../../assets/Flag_of_the_Arab_League.svg.png";

const CountryControl = ({ getCountryName }) => {
  const data = [
    { name: "english", flag: AmericaFlag },
    { name: "italy", flag: ItalyFlag },
    { name: "franca", flag: FrancaFlag },
    { name: "Arabic", flag: ArabicFlag },
  ];

  const [selectCountry, SetselectCountry] = useState(null);
  if (selectCountry == null) {
    SetselectCountry({
      name: "itely",
      countryFlag: ItalyFlag,
    });
  }
  useEffect(() => {
    getCountryName(selectCountry.name);
  }, [selectCountry]);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Box>
            <Button
              color="inherit"
              variant="text"
              {...bindTrigger(popupState)}
              sx={{
                color: "#ff6f00",
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                src={selectCountry.countryFlag}
                alt="English"
                width={"30px"}
                style={{ marginRight: "10px" }}
              />
              <Typography
                variant="span"
                sx={{ fontWeight: "600", letterSpacing: "2px" }}
              >
                {/* {selectCountry.name} */}
              </Typography>
            </Button>
            <Box>
              <Menu {...bindMenu(popupState)}>
                {data.map((item, index) => {
                  return (
                    <MenuItem key={index} onClick={popupState.close}>
                      <Button
                        onClick={() => {
                          SetselectCountry({
                            name: item.name,
                            countryFlag: item.flag,
                          });
                        }}
                        variant="contained"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <img
                          src={item.flag}
                          alt={item.name}
                          width={"30px"}
                          style={{ marginRight: "6px" }}
                        />
                        <Typography
                          sx={{
                            fontWeight: 600,
                            letterSpacing: "1",
                          }}
                          variant="span"
                        >
                          {item.name}
                        </Typography>
                      </Button>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            {data.map((item, index) => {
              return (
                <Box key={index} sx={{ marginBottom: "15px" }}>
                  <Button
                    onClick={() =>
                      SetselectCountry({
                        name: item.name,
                        countryFlag: item.flag,
                      })
                    }
                    variant="contained"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.flag}
                      alt={item.name}
                      width={"50px"}
                      style={{ marginRight: "50px" }}
                    />
                    <Typography
                      variant="span"
                      sx={{
                        fontWeight: "600",
                        letterSpacing: "3px",
                        fontSize: "20px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Button>
                </Box>
              );
            })}
          </Box>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default CountryControl;
