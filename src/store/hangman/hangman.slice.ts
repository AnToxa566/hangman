import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { SoundTitle } from '../../common/enums/enums';
import { Word } from '../../common/interfaces/interfaces';
import {
  COINS_FOR_VICTORY,
  HINT_COST,
  MAX_MISTAKES,
} from '../../common/constants/constants';
import { getRandomWord, isWordFilled } from '../../helpers/helpers';
import {
  audioService,
  coinService,
  levelService,
} from '../../services/services';
import { useHint } from './hangman.actions';

interface HangmanState {
  word: Word;
  coins: number;
  level: number;
  usedLetters: string[];
  mistakesNumber: number;
  isLetterRight: boolean;
  isGameOver: boolean;
  isWon: boolean;
}

const initialState: HangmanState = {
  word: getRandomWord(),
  coins: coinService.getCoins(),
  level: levelService.getLevel(),
  usedLetters: [],
  mistakesNumber: 0,
  isLetterRight: false,
  isGameOver: false,
  isWon: false,
};

const { reducer, actions, name } = createSlice({
  name: 'hangman',
  initialState,
  reducers: {
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

        state.coins = coinService.incrementCoins(COINS_FOR_VICTORY);
        state.level = levelService.incrementLevel();

        audioService.getAudio(SoundTitle.WIN).play();
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
  extraReducers: (builder) => {
    builder
      .addCase(useHint.fulfilled, (state) => {
        state.coins = coinService.decrementCoins(HINT_COST);
      })
      .addCase(useHint.rejected, (_state, action) => {
        alert(action.payload);
      });
  },
});

export { actions, name, reducer };
