import { useState, useEffect, useCallback } from '../../hooks/hooks';
import {
  Hangman,
  Keyboard,
  WinModal,
  WordPattern,
} from './components/components';
import { Hint, Level } from '../../components/components';
import { Word } from '../../common/interfaces/interfaces';
import {
  COINS_FOR_VICTORY,
  MAX_MISTAKES,
} from '../../common/constants/constants';
import { getRandomWord, isLetterUsed } from './helpers/helpers';

import styles from './styles.module.scss';

const Game = () => {
  const [mistakesNumber, setMistakesNumber] = useState<number>(0);

  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const [word] = useState<Word>(getRandomWord());

  const isWrongLetter = useCallback(
    (letter: string): boolean =>
      word.title.toLowerCase().search(letter.toLowerCase()) === -1,
    [word.title]
  );

  const isWordFilled = useCallback((): boolean => {
    const letters = word.title.split('');

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== ' ' && !isLetterUsed(usedLetters, letters[i])) {
        return false;
      }
    }

    return true;
  }, [usedLetters, word.title]);

  const handleKeyboardClick = (letter: string) => {
    if (isWrongLetter(letter)) {
      setMistakesNumber(mistakesNumber + 1);
    }

    setUsedLetters([...usedLetters, letter]);
  };

  useEffect(() => {
    if (mistakesNumber === MAX_MISTAKES) {
      console.log('Game Over!');
    }
  }, [mistakesNumber]);

  return (
    <div className={styles.container}>
      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text={word.category} />

      <WordPattern phrase={word.title} openLetters={usedLetters} />

      <Keyboard usedLetters={usedLetters} onClick={handleKeyboardClick} />

      {isWordFilled() && (
        <WinModal word={word.title} coins={COINS_FOR_VICTORY} />
      )}
    </div>
  );
};

export { Game };
