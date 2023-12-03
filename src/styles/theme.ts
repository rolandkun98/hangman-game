import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      userSelect: "none",
      [breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2rem",
      userSelect: "none",
      [breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
  },
});
