import { Hangman, Keyboard, WordPattern } from './components/components';
import { Hint, Level } from '../../components/components';
import { useState } from '../../hooks/hooks';

import styles from './styles.module.scss';

const Game = () => {
  const [mistakesNumber, setMistakesNumber] = useState<number>(0);

  const [openLetters, setOpenLetters] = useState<string[]>(['p']);

  const [usedLetters, setUsedLetters] = useState<string[]>(['p', 't', 'o']);

  return (
    <div className={styles.container}>
      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text="Food" />

      <WordPattern word="apple" openLetters={openLetters} />

      <Keyboard usedLetters={usedLetters} />
    </div>
  );
};

export { Game };
