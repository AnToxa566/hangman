import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ActionType } from './common';
import { ExceptionMessage } from '../../common/enums/enums';
import { HINT_COST } from '../../common/constants/constants';
import { actions as hangmanActionCreator } from './hangman';
import { getEnglishAlphabet, isLetterContained } from '../../helpers/helpers';

export const useHint = createAsyncThunk<void, void, { state: RootState }>(
  ActionType.USE_HINT,
  async (_request, { dispatch, getState, rejectWithValue }) => {
    const { hangman } = getState();
    const { coins, word, usedLetters } = hangman;

    const alphabet = getEnglishAlphabet();

    const isLetterRight = (letter: string): boolean =>
      Boolean(
        isLetterContained(word.title.split(''), letter) &&
          !isLetterContained(usedLetters, letter)
      );

    if (coins >= HINT_COST) {
      for (const letter of alphabet) {
        if (isLetterRight(letter)) {
          dispatch(hangmanActionCreator.chooseLetter(letter));
          break;
        }
      }
    } else {
      return rejectWithValue(ExceptionMessage.NOT_ENOUGH_COINS);
    }
  }
);
