import HangmanIcon from "@/components/elements/icons/hangman";
import PageContainer from "@/components/elements/page-container";
import { HangmanPhases } from "@/utils/enums/hangman-phases";
import { Routes } from "@/utils/enums/routes";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";

const HomePage = (): JSX.Element => {
  const router = useRouter();
  const theme = useTheme();
  const isScreenLG = useMediaQuery(theme.breakpoints.up("sm"));
  const hangmanSize = useMemo(
    () => (isScreenLG ? "10rem" : "8rem"),
    [isScreenLG]
  );

  return (
    <PageContainer>
      <Typography variant="h1">The Hangman</Typography>
      <HangmanIcon
        width={hangmanSize}
        height={hangmanSize}
        sx={{ margin: "1.5rem 0" }}
        phase={HangmanPhases.PHASE_09}
      />
      <Typography variant="h2" sx={{ marginBottom: ".7rem" }}>
        Game instructions
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Choose the length of the word you want to guess. <br />
        Select the letter you want to guess in the hidden word. <br />
        If the chosen letter is in the word, it will appear in its position(s).
        <br />
        If not, a part of the hangman figure starts to appear.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: ".3rem",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        The objective is to guess a hidden word before a stick figure is
        completely drawn.
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "5rem", width: "10rem" }}
        onClick={() => router.push(Routes.GAME_PAGE)}
      >
        Got it!
      </Button>
    </PageContainer>
  );
};

export default HomePage;
