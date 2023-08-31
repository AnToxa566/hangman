import { configureStore } from '@reduxjs/toolkit';

import { reducer as hangmanReducer } from './hangman/hangman';

export const store = configureStore({
  reducer: {
    hangman: hangmanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
