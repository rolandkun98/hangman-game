import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    h1: {
      fontSize: "3.3rem",
      fontWeight: 600,
      userSelect: "none",
      [breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      userSelect: "none",
      [breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
    subtitle1: {
      lineHeight: "1.3",
      fontSize: "1.2rem",
      [breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    body1: {
      lineHeight: "1.3",
      fontSize: ".9rem",
      [breakpoints.down("sm")]: {
        fontSize: ".85rem",
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        },
      },
    },
  },
});
