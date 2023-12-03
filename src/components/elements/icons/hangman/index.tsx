import { HangmanPhases } from "@/utils/enums/hangman-phases";
import { SvgIcon, SxProps } from "@mui/material";
import React from "react";

interface HangmanIconProps {
  phase: HangmanPhases;
  height?: string;
  width?: string;
  sx?: SxProps;
}

const HangmanIcon = ({
  phase,
  height,
  width,
  sx,
}: HangmanIconProps): JSX.Element => {
  return (
    <SvgIcon
      sx={{
        stroke: "#000",
        strokeWidth: "0.25",
        strokeLinecap: "round",
        fill: "none",
        height: height ? height : "8rem",
        width: width ? width : "8rem",
        ...sx,
      }}
    >
      <svg viewBox="0 0 10 12">
        {phase >= HangmanPhases.PHASE00 && <path d="M1,11 h8" />}
        {phase >= HangmanPhases.PHASE01 && <path d="M9,11 v-10" />}
        {phase >= HangmanPhases.PHASE02 && <path d="M9,1 h-4" />}
        {phase >= HangmanPhases.PHASE03 && <path d="M5,1 v2" />}
        {phase >= HangmanPhases.PHASE04 && <circle cx="5" cy="4" r="1" />}
        {phase >= HangmanPhases.PHASE05 && <path d="M5,5 v3" />}
        {phase >= HangmanPhases.PHASE06 && <path d="M5,5 l-2,2" />}
        {phase >= HangmanPhases.PHASE07 && <path d="M5,5 l2,2" />}
        {phase >= HangmanPhases.PHASE08 && <path d="M5,8 l-2,2" />}
        {phase >= HangmanPhases.PHASE09 && <path d="M5,8 l2,2" />}
      </svg>
    </SvgIcon>
  );
};

export default HangmanIcon;
