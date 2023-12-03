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
      fontSize: "4rem",
      fontWeight: 600,
      userSelect: "none",
      [breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      userSelect: "none",
      [breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
    subtitle1: {
      lineHeight: "1.3",
      [breakpoints.down("sm")]: {
        fontSize: ".9rem",
      },
    },
  },
});
