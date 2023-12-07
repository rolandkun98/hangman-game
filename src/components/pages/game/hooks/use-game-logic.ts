import { useEffect, useState } from "react";
import { words } from "../data";
import {
  DEFAULT_MISTAKES_VALUE,
  GAME_STATUS,
  MISTAKES,
  RANDOM_VALUE,
  SELECTED_WORD_ID,
  USED_LETTERS,
} from "@/utils/constants/constants";
import { HangmanPhases } from "@/utils/enums/hangman-phases";
import { GameStatus } from "@/utils/enums/game-status";

interface UseGameLogicOutput {
  wordLengths: number[];
  selectedLength: number;
  setSelectedLength: (value: number) => void;
  startGame: () => void;
  endGame: () => void;
  startNewGame: () => void;
  selectedWord: string;
  checkLetter: (letter: string) => void;
  mistakes: number;
  usedLetters: string[];
  gameStatus: GameStatus;
}

export const useGameLogic = (): UseGameLogicOutput => {
  const [wordLengths, setWordLengths] = useState<number[]>([]);
  const [selectedLength, setSelectedLength] = useState(RANDOM_VALUE);
  const [selectedWord, setSelectedWord] = useState("");
  const [mistakes, setMistakes] = useState(DEFAULT_MISTAKES_VALUE);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState(GameStatus.NOT_STARTED);

  const initWordLengths = (): void => {
    const lengths: number[] = [];
    words.map((word) => {
      if (!lengths.includes(word.value.length)) {
        lengths.push(word.value.length);
      }
    });
    lengths.sort((a, b) => a - b);
    lengths.push(RANDOM_VALUE);
    setWordLengths(lengths);
  };

  const startGame = (): void => {
    const filteredWords =
      selectedLength !== RANDOM_VALUE
        ? words.filter((word) => word.value.length === selectedLength)
        : words;

    const randomWord =
      filteredWords[Math.floor(Math.random() * filteredWords.length)];

    setSelectedWord(randomWord.value);
    setGameStatus(GameStatus.ON_GOING);

    localStorage.setItem(SELECTED_WORD_ID, randomWord.id);
    localStorage.setItem(GAME_STATUS, GameStatus.ON_GOING);
  };

  const loadGame = (): void => {
    const loadedWordId = localStorage.getItem(SELECTED_WORD_ID);
    const loadedMistakes = localStorage.getItem(MISTAKES);
    const loadedGameStatus = localStorage.getItem(GAME_STATUS);
    const loadedUsedLetters = localStorage.getItem(USED_LETTERS);

    if (loadedWordId) {
      const foundItem = words.find((word) => word.id === loadedWordId);
      setSelectedWord(foundItem?.value || "");
    }

    if (loadedMistakes) {
      setMistakes(Number(loadedMistakes));
    }

    if (loadedGameStatus) {
      setGameStatus(loadedGameStatus as GameStatus);
    }

    if (loadedUsedLetters) {
      setUsedLetters(JSON.parse(loadedUsedLetters));
    }
  };

  const resetStates = (): void => {
    setSelectedLength(RANDOM_VALUE);
    setSelectedWord("");
    setMistakes(DEFAULT_MISTAKES_VALUE);
    setGameStatus(GameStatus.ON_GOING);
    setUsedLetters([]);
  };

  const removeLocalStorageItems = (): void => {
    localStorage.removeItem(SELECTED_WORD_ID);
    localStorage.removeItem(MISTAKES);
    localStorage.removeItem(GAME_STATUS);
    localStorage.removeItem(USED_LETTERS);
  };

  const endGame = (): void => {
    setGameStatus(GameStatus.PLAYER_LOST);
    localStorage.setItem(GAME_STATUS, GameStatus.PLAYER_LOST);
  };

  const startNewGame = (): void => {
    resetStates();
    removeLocalStorageItems();
    setGameStatus(GameStatus.NOT_STARTED);
  };

  const checkLetter = (letter: string): void => {
    const usedLettersCopy = [...usedLetters, letter];

    if (
      Array.from(selectedWord).every((char) => usedLettersCopy.includes(char))
    ) {
      setGameStatus(GameStatus.PLAYER_WON);
      localStorage.setItem(GAME_STATUS, GameStatus.PLAYER_WON);
    }

    localStorage.setItem(USED_LETTERS, JSON.stringify(usedLettersCopy));
    setUsedLetters(usedLettersCopy);

    if (!selectedWord.includes(letter) && mistakes <= HangmanPhases.PHASE_09) {
      const increasedMistakes = mistakes + 1;
      setMistakes(increasedMistakes);
      localStorage.setItem(MISTAKES, increasedMistakes.toString());

      if (increasedMistakes > HangmanPhases.PHASE_09) {
        setGameStatus(GameStatus.PLAYER_LOST);
        localStorage.setItem(GAME_STATUS, GameStatus.PLAYER_LOST);
      }
    }
  };

  useEffect(() => {
    initWordLengths();
    loadGame();
  }, []);

  return {
    wordLengths,
    selectedLength,
    setSelectedLength,
    startGame,
    endGame,
    startNewGame,
    selectedWord,
    checkLetter,
    mistakes,
    usedLetters,
    gameStatus,
  };
};
