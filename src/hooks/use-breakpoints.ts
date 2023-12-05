import { useMediaQuery, useTheme } from "@mui/material";

interface UseBreakpointsOutput {
  isAboveSm: boolean;
}

export const useBreakpoints = (): UseBreakpointsOutput => {
  const theme = useTheme();
  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));

  return {
    isAboveSm,
  };
};
