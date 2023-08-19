import { useState, useEffect, useCallback } from '../../hooks/hooks';
import { Hangman, Keyboard, WordPattern } from './components/components';
import { Hint, Level } from '../../components/components';
import { Word } from '../../common/interfaces/interfaces';
import { MAX_MISTAKES } from '../../common/constants/constants';
import { getRandomWord } from './helpers/helpers';

import styles from './styles.module.scss';

const Game = () => {
  const [mistakesNumber, setMistakesNumber] = useState<number>(0);

  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const [word] = useState<Word>(getRandomWord());

  const isWrongLetter = useCallback((letter: string): boolean => 
    word.title.toLowerCase().search(letter.toLowerCase()) === -1,
  [word.title]);

  const isLetterUsed = useCallback((letter: string): boolean =>
    Boolean(usedLetters.find((lt) => lt.toLowerCase() === letter.toLowerCase())
  ), [usedLetters]);

  const isWordFilled = useCallback((): boolean => {
    const letters = word.title.split('');

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== ' ' && !isLetterUsed(letters[i])) {
        return false;
      }
    }
    
    return true;
  }, [isLetterUsed, word.title]);

  const handleKeyboardClick = (letter: string) => {
    if (isWrongLetter(letter)) {
      setMistakesNumber(mistakesNumber + 1);
    }

    setUsedLetters([...usedLetters, letter]);
  }

  useEffect(() => {
    if (mistakesNumber === MAX_MISTAKES) {
      console.log("Game Over!");
    }
    else if (isWordFilled()) {
      console.log("You won!");
    }
  }, [isWordFilled, mistakesNumber]);

  return (
    <div className={styles.container}>
      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text={word.category} />

      <WordPattern phrase={word.title} openLetters={usedLetters} />

      <Keyboard usedLetters={usedLetters} onClick={handleKeyboardClick} />
    </div>
  )
};

export { Game };
