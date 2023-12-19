import HangmanIcon from "@/components/common-elements/icons/hangman";
import { HangmanPhases } from "@/utils/enums/hangman-phases";
import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { useRouter } from "next/router";
import { Routes } from "@/utils/enums/routes";
import LetterBox from "@/components/common-elements/letter-box";
import SelectButton from "@/components/common-elements/select-buttons";
import { alphabet } from "../data";
import { GameStatus } from "@/utils/enums/game-status";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { useTranslation, Trans } from "react-i18next";

interface GameProps {
  endGame: () => void;
  startNewGame: () => void;
  selectedWord: string;
  checkLetter: (letter: string) => void;
  mistakes: number;
  usedLetters: string[];
  gameStatus: GameStatus;
}

const Game = ({
  endGame,
  startNewGame,
  selectedWord,
  checkLetter,
  mistakes,
  usedLetters,
  gameStatus,
}: GameProps): JSX.Element => {
  const { t } = useTranslation();
  const breakpoints = useBreakpoints();
  const router = useRouter();

  const Hangman = (
    <HangmanIcon
      sx={{
        marginRight: breakpoints.isAboveSm ? "3rem" : undefined,
        alignSelf: breakpoints.isAboveSm ? undefined : "center",
      }}
      width={breakpoints.isAboveSm ? "10rem" : "8rem"}
      height={breakpoints.isAboveSm ? "10rem" : "8rem"}
      phase={(mistakes - 1) as HangmanPhases.PHASE_09}
    />
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: breakpoints.isAboveSm ? undefined : "0 .5rem",
      }}
    >
      <Button
        endIcon={<EastIcon />}
        sx={{
          alignSelf: "flex-end",
        }}
        onClick={() => router.push(Routes.HOME_PAGE)}
      >
        {t("gamePage.game.buttons.instructions")}
      </Button>

      <Box sx={{ display: "flex" }}>
        {breakpoints.isAboveSm && Hangman}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h1">The Hangman</Typography>
          {!breakpoints.isAboveSm && Hangman}
          {gameStatus !== GameStatus.ON_GOING && (
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: "2rem",
                color:
                  gameStatus === GameStatus.PLAYER_LOST
                    ? "error.main"
                    : "success.main",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {(gameStatus === GameStatus.PLAYER_LOST && (
                  <>
                    <SentimentVeryDissatisfiedIcon />{" "}
                    {t("gamePage.game.messages.playerLost")}
                  </>
                )) ||
                  (gameStatus === GameStatus.PLAYER_WON && (
                    <>
                      <SentimentSatisfiedAltIcon />{" "}
                      {t("gamePage.game.messages.playerWon")}
                    </>
                  ))}
              </Box>
            </Typography>
          )}
          <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
            <Trans values={{ length: selectedWord.length }}>
              {t("gamePage.game.wordLength")}
            </Trans>
          </Typography>
          <Box sx={{ display: "flex", marginTop: "1rem" }}>
            {Array.from(selectedWord).map((letter, index) => (
              <LetterBox
                key={index}
                value={letter.toUpperCase()}
                boxSize={breakpoints.isAboveSm ? 2 : 1.3}
                sx={{
                  marginRight: breakpoints.isAboveSm ? ".5rem" : ".1rem",
                }}
                showValue={usedLetters.includes(letter)}
              />
            ))}
          </Box>
          {gameStatus === GameStatus.PLAYER_LOST && (
            <Typography variant="subtitle1" sx={{ marginTop: ".5rem" }}>
              <Trans values={{ selectedWord }}>
                {t("gamePage.game.selectedWord")}
              </Trans>
            </Typography>
          )}
          <Typography variant="subtitle1" sx={{ marginTop: "2.5rem" }}>
            <Trans values={{ mistakes }}>{t("gamePage.game.mistakes")}</Trans>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: ".5rem" }}>
            {t("gamePage.game.texts.element1")}
          </Typography>
          <SelectButton
            setSelectedValue={(value) => {
              checkLetter(value as string);
            }}
            columns={breakpoints.isAboveSm ? 7 : 5}
            buttonSize={2}
            sx={{
              width: breakpoints.isAboveSm ? "30rem" : "auto",
              marginTop: ".5rem",
              marginBottom: "2rem",
              justifyContent: "flex-start",
            }}
            items={alphabet.map((item) => ({
              value: item,
              text: item.toUpperCase(),
              disabled:
                gameStatus !== GameStatus.ON_GOING ||
                usedLetters.includes(item),
            }))}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: breakpoints.isAboveSm ? "row" : "column",
              justifyContent: breakpoints.isAboveSm
                ? "space-between"
                : "center",
              alignItems: "center",
            }}
          >
            {gameStatus === GameStatus.ON_GOING && (
              <Button
                sx={{
                  boxShadow: 3,
                  width: "13rem",
                  marginBottom: breakpoints.isAboveSm ? undefined : "1rem",
                }}
                onClick={endGame}
              >
                {t("gamePage.game.buttons.endGame")}
              </Button>
            )}
            <Button
              onClick={startNewGame}
              variant="contained"
              sx={{ width: "13rem" }}
            >
              {t("gamePage.game.buttons.newGame")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
