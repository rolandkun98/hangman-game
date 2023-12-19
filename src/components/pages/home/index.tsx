import HangmanIcon from "@/components/common-elements/icons/hangman";
import PageContainer from "@/components/common-elements/page-container";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { HangmanPhases } from "@/utils/enums/hangman-phases";
import { Routes } from "@/utils/enums/routes";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const HomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();
  const breakpoints = useBreakpoints();
  const hangmanSize = useMemo(
    () => (breakpoints.isAboveSm ? "10rem" : "8rem"),
    [breakpoints.isAboveSm]
  );

  return (
    <PageContainer>
      <Typography variant="h1">{t("title")}</Typography>
      <HangmanIcon
        width={hangmanSize}
        height={hangmanSize}
        sx={{ margin: "1.5rem 0" }}
        phase={HangmanPhases.PHASE_09}
      />
      <Typography variant="h2" sx={{ marginBottom: ".7rem" }}>
        {t("homePage.title")}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {t("homePage.instructions")}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: ".3rem",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {t("homePage.objective")}
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "5rem", width: "10rem" }}
        onClick={() => router.push(Routes.GAME_PAGE)}
      >
        {t("homePage.buttons.ok")}
      </Button>
    </PageContainer>
  );
};

export default HomePage;
