import SelectButtons from "@/components/common-elements/select-buttons";
import { GAME_TITLE, RANDOM, RANDOM_VALUE } from "@/utils/constants/constants";
import { Button, Typography } from "@mui/material";

interface LengthSelectorProps {
  wordLengths: number[];
  selectedLength: number;
  setSelectedLength: (value: number) => void;
  startGame: () => void;
}

const LengthSelector = ({
  wordLengths,
  selectedLength,
  setSelectedLength,
  startGame,
}: LengthSelectorProps): JSX.Element => {
  return (
    <>
      <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
        {GAME_TITLE}
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Let&apos;s play <strong>Hangman!</strong>
      </Typography>
      <Typography variant="subtitle1">
        How many letters do you want in your word?
      </Typography>
      <SelectButtons
        selectedValue={selectedLength}
        setSelectedValue={(value) => setSelectedLength(value as number)}
        columns={3}
        buttonSize={3}
        sx={{
          margin: "1.5rem 0",
        }}
        items={wordLengths.map((item) => ({
          value: item,
          text: item === RANDOM_VALUE ? RANDOM : item.toString(),
        }))}
        separateLastItem
      />
      <Button
        variant="contained"
        sx={{ marginTop: "3rem", width: "10rem" }}
        disabled={selectedLength === undefined}
        onClick={startGame}
      >
        Let&apos;s play
      </Button>
    </>
  );
};

export default LengthSelector;
