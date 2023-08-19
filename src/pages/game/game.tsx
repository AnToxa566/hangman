import { useState, useEffect } from '../../hooks/hooks';
import { Hangman, Keyboard, WordPattern } from './components/components';
import { Hint, Level } from '../../components/components';
import { Word } from '../../common/interfaces/interfaces';
import { getRandomWord } from './helpers/helpers';

import styles from './styles.module.scss';

const Game = () => {
  const [mistakesNumber] = useState<number>(0);

  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const [word, setWord] = useState<Word>();

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  const handleKeyboardClick = (letter: string) => setUsedLetters([...usedLetters, letter]); 

  return word ? (
    <div className={styles.container}>
      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text={word.category} />

      <WordPattern phrase={word.title} openLetters={usedLetters} />

      <Keyboard usedLetters={usedLetters} onClick={handleKeyboardClick} />
    </div>
  ) : (
    <>Loading...</> // TODO: Loading Component
  );
};

export { Game };
