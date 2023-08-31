import { Word } from '../../common/interfaces/interfaces';
import { isLetterContained } from '../is-letter-contained/is-letter-contained.helper';

const isWordFilled = (word: Word, usedLetters: string[]): boolean => {
  const letters = word.title.split('');

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== ' ' && !isLetterContained(usedLetters, letters[i])) {
      return false;
    }
  }

  return true;
};

export { isWordFilled };
