import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Word } from '../../common/interfaces/interfaces';
import { getRandomWord, isWordFilled } from '../../helpers/helpers';
import { MAX_MISTAKES } from '../../common/constants/constants';
import { audioService, levelService } from '../../services/services';
import { SoundTitle } from '../../common/enums/enums';

interface HangmanState {
  word: Word;
  level: number;
  usedLetters: string[];
  mistakesNumber: number;
  isLetterRight: boolean;
  isGameOver: boolean;
  isWon: boolean;
}

const initialState: HangmanState = {
  word: getRandomWord(),
  level: levelService.getLevel(),
  usedLetters: [],
  mistakesNumber: 0,
  isLetterRight: false,
  isGameOver: false,
  isWon: false,
};

export const hangmanSlice = createSlice({
  name: 'hangman',
  initialState,
  reducers: {
    generateWord: (state) => {
      state.word = getRandomWord();
    },
    chooseLetter: (state, action: PayloadAction<string>) => {
      state.usedLetters.push(action.payload);
      state.isLetterRight =
        state.word.title.toLowerCase().search(action.payload.toLowerCase()) !==
        -1;

      if (!state.isLetterRight) {
        audioService.getAudio(SoundTitle.WRONG_CHOOSE).play();
        state.mistakesNumber += 1;
      } else {
        audioService.getAudio(SoundTitle.CORRECT_CHOOSE).play();
      }

      if (state.mistakesNumber >= MAX_MISTAKES) {
        state.isGameOver = true;
        state.isWon = false;

        audioService.getAudio(SoundTitle.LOSE).play();
      }

      if (isWordFilled(state.word, state.usedLetters)) {
        state.isGameOver = true;
        state.isWon = true;

        audioService.getAudio(SoundTitle.WIN).play();
        state.level = levelService.incrementLevel();
      }
    },
    restartGame: (state) => {
      state.word = getRandomWord();
      state.usedLetters = [];
      state.mistakesNumber = 0;
      state.isLetterRight = false;
      state.isGameOver = false;
      state.isWon = false;
    },
  },
});

export const { generateWord, chooseLetter, restartGame } = hangmanSlice.actions;

export default hangmanSlice.reducer;
