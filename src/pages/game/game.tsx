import { useState, useEffect } from '../../hooks/hooks';
import { Hangman, Keyboard, WordPattern } from './components/components';
import { Hint, Level } from '../../components/components';
import { Word } from '../../common/interfaces/interfaces';
import { getRandomWord } from './helpers/helpers';

import styles from './styles.module.scss';

const Game = () => {
  const [mistakesNumber] = useState<number>(0);

  const [openLetters] = useState<string[]>([]);

  const [usedLetters] = useState<string[]>([]);

  const [word, setWord] = useState<Word>();

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  return word ? (
    <div className={styles.container}>
      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text={word.category} />

      <WordPattern phrase={word.title} openLetters={openLetters} />

      <Keyboard usedLetters={usedLetters} />
    </div>
  ) : (
    <>Loading...</> // TODO: Loading Component
  );
};

export { Game };
