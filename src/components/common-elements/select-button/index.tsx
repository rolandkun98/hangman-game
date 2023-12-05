import { Box, Paper, SxProps } from "@mui/material";

interface SelectButtonProps {
  selectedValue: number | undefined;
  setSelectedValue: (value: number) => void;
  items: { value: number; text: string }[];
  columns: number;
  buttonSize: number;
  separateLastItem?: boolean;
  sx?: SxProps;
}

const SelectButton = ({
  selectedValue,
  setSelectedValue,
  items,
  columns,
  buttonSize,
  separateLastItem,
  sx,
}: SelectButtonProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        ...sx,
      }}
    >
      {items.map((item, index) => {
        return (
          <>
            <Paper
              key={item.value}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: `${buttonSize / 2}rem`,
                fontWeight: 600,
                userSelect: "none",
                cursor: "pointer",
                margin: ".5rem",
                boxShadow: 3,
                backgroundColor:
                  selectedValue === item.value
                    ? "primary.main"
                    : "background.paper",
                color:
                  selectedValue === item.value
                    ? "background.paper"
                    : "primary.main",
                height: `${buttonSize}rem`,
                width:
                  separateLastItem && index === items.length - 1
                    ? `${columns * buttonSize + columns * 0.5}rem`
                    : `${buttonSize}rem`,
              }}
              onClick={() => setSelectedValue(item.value)}
            >
              {item.text}
            </Paper>
            {(separateLastItem && index === items.length - 2) ||
            (index + 1) % columns === 0 ? (
              <Box sx={{ width: "100%" }} />
            ) : (
              <></>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default SelectButton;
