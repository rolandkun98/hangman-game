import { Box, SxProps } from "@mui/material";

interface LetterBoxProps {
  value: string;
  showValue: boolean;
  boxSize: number;
  sx?: SxProps;
}

const LetterBox = ({
  value,
  showValue,
  boxSize,
  sx,
}: LetterBoxProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: `${boxSize}rem`,
        height: `${boxSize}rem`,
        fontSize: `${boxSize / 2}rem`,
        border: "2px solid",
        borderColor: "primary.main",
        marginRight: ".5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        userSelect: "none",
        ...sx,
      }}
    >
      {showValue && value}
    </Box>
  );
};

export default LetterBox;
