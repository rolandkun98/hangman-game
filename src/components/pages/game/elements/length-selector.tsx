import SelectButtons from "@/components/common-elements/select-buttons";
import { RANDOM, RANDOM_VALUE } from "@/utils/constants/constants";
import { Button, Typography } from "@mui/material";
import { useTranslation, Trans } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
        {t("title")}
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        <Trans components={{ strong: <strong /> }}>
          {t("gamePage.lengthSelector.subtitles.part1")}
        </Trans>
      </Typography>
      <Typography variant="subtitle1">
        {t("gamePage.lengthSelector.subtitles.part2")}
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
        {t("gamePage.lengthSelector.buttons.play")}
      </Button>
    </>
  );
};

export default LengthSelector;
