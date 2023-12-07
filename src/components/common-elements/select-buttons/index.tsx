import { Box, Paper, SxProps } from "@mui/material";

interface SelectButtonsProps {
  selectedValue?: number | string;
  setSelectedValue: (value: number | string) => void;
  items: { value: number | string; text: string; disabled?: boolean }[];
  columns: number;
  buttonSize: number;
  separateLastItem?: boolean;
  sx?: SxProps;
}

const SelectButtons = ({
  selectedValue,
  setSelectedValue,
  items,
  columns,
  buttonSize,
  separateLastItem,
  sx,
}: SelectButtonsProps): JSX.Element => {
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
                cursor: item.disabled ? "default" : "pointer",
                margin: ".5rem",
                boxShadow: item.disabled ? 1 : 3,
                backgroundColor:
                  selectedValue === item.value
                    ? "primary.main"
                    : "background.paper",
                color: item.disabled
                  ? "text.disabled"
                  : selectedValue === item.value
                  ? "background.paper"
                  : "primary.main",
                height: `${buttonSize}rem`,
                width:
                  separateLastItem && index === items.length - 1
                    ? `${columns * buttonSize + columns * 0.5}rem`
                    : `${buttonSize}rem`,
              }}
              onClick={
                item.disabled ? undefined : () => setSelectedValue(item.value)
              }
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

export default SelectButtons;
