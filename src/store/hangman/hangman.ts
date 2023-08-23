import { useHint } from './hangman.actions';
import { actions } from './hangman.slice';

const allActions = {
  ...actions,
  useHint,
};

export { allActions as actions };
export { reducer } from './hangman.slice';
