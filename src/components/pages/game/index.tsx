import PageContainer from "@/components/common-elements/page-container";
import { useGameLogic } from "./hooks/use-game-logic";
import LengthSelector from "./elements/length-selector";
import Game from "./elements/game";
import { GameStatus } from "@/utils/enums/game-status";
import { useBreakpoints } from "@/hooks/use-breakpoints";

const GamePage = (): JSX.Element => {
  const gameLogic = useGameLogic();
  const breakpoints = useBreakpoints();

  return (
    <PageContainer
      sx={
        gameLogic.gameStatus !== GameStatus.NOT_STARTED &&
        !breakpoints.isAboveSm
          ? { paddingTop: "1rem" }
          : undefined
      }
    >
      {gameLogic.gameStatus !== GameStatus.NOT_STARTED ? (
        <Game
          endGame={gameLogic.endGame}
          selectedWord={gameLogic.selectedWord}
          checkLetter={gameLogic.checkLetter}
          mistakes={gameLogic.mistakes}
          usedLetters={gameLogic.usedLetters}
          gameStatus={gameLogic.gameStatus}
          startNewGame={gameLogic.startNewGame}
        />
      ) : (
        <LengthSelector
          wordLengths={gameLogic.wordLengths}
          selectedLength={gameLogic.selectedLength}
          setSelectedLength={gameLogic.setSelectedLength}
          startGame={() => gameLogic.startGame()}
        />
      )}
    </PageContainer>
  );
};

export default GamePage;
