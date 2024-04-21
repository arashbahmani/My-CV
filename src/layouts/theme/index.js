import { createTheme } from "@mui/material/styles";

const typographyTheme = {
  fontFamily: "tanha, vazir, roboto",
  h1: {
    fontSize: 46,
    fontWeight: "bold",
    letterSpacing: "5%",
    textShadow: "black 0px 3px 3px",
  },
  h2: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: "3%",
    textShadow: "black 0px 3px 3px",
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: "1%",
    textShadow: "black 0px 3px 3px",
  },

  body1: {
    fontSize: 18,
    textShadow: "black 0px 3px 3px",
  },
  body2: {
    fontSize: 16,
    letterSpacing: "-2%",
    textShadow: "black 0px 3px 3px",
  },
  body3: {
    fontSize: 14,
    fontWeight: 100,
    letterSpacing: "-5%",
    textShadow: "black 0px 3px 3px",
  },
};

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#040718",
      light: "#111425",
    },
    secondary: {
      main: "#623AB1",
      light: "#CEBEEF",
    },
    textColor: {
      main: "#F8F8F8",
    },
  },
  typography: typographyTheme,
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#623AB1",
      light: "#CEBEEF",
    },
    secondary: {
      main: "#040718",
      light: "#111425",
    },
    textColor: {
      main: "#F8F8F8",
    },
  },
  typography: typographyTheme,
});
