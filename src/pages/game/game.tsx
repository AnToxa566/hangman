import { useState, useEffect, useCallback, useMemo } from '../../hooks/hooks';
import {
  Hangman,
  Keyboard,
  ResultModal,
  WordPattern,
} from './components/components';
import {
  getEnglishAlphabet,
  getRandomWord,
  isLetterContained,
} from './helpers/helpers';
import { Hint, Level } from '../../components/components';
import { Word } from '../../common/interfaces/interfaces';
import { MAX_MISTAKES } from '../../common/constants/constants';
import { audioService, levelService } from '../../services/services';

import styles from './styles.module.scss';
import { SoundTitle } from '../../common/enums/enums';

const Game = () => {
  const [mistakesNumber, setMistakesNumber] = useState<number>(0);

  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const [word] = useState<Word>(getRandomWord());

  const englishAlphabet = useMemo(getEnglishAlphabet, []);

  const correctAudio = audioService.getAudio(SoundTitle.CORRECT_CHOOSE);

  const wrongAudio = audioService.getAudio(SoundTitle.WRONG_CHOOSE);

  const isWrongLetter = useCallback(
    (letter: string): boolean =>
      word.title.toLowerCase().search(letter.toLowerCase()) === -1,
    [word.title]
  );

  const isWordFilled = useCallback((): boolean => {
    const letters = word.title.split('');

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== ' ' && !isLetterContained(usedLetters, letters[i])) {
        return false;
      }
    }

    return true;
  }, [usedLetters, word.title]);

  const isMistakeLimitExceeded = useCallback(
    (): boolean => mistakesNumber >= MAX_MISTAKES,
    [mistakesNumber]
  );

  const handleKeyClick = useCallback(
    (letter: string) => {
      if (isWrongLetter(letter)) {
        setMistakesNumber(mistakesNumber + 1);
        wrongAudio.play();
      } else {
        correctAudio.play();
      }

      setUsedLetters([...usedLetters, letter]);
    },
    [isWrongLetter, mistakesNumber, usedLetters, correctAudio, wrongAudio]
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent): void => {
      if (
        isLetterContained(englishAlphabet, event.key) &&
        !isLetterContained(usedLetters, event.key)
      ) {
        handleKeyClick(event.key);
      }
    },
    [englishAlphabet, usedLetters, handleKeyClick]
  );

  useEffect(() => {
    addEventListener('keydown', handleKeydown);

    if (isWordFilled() || isMistakeLimitExceeded()) {
      if (isWordFilled()) {
        levelService.incrementLevel();
        audioService.getAudio(SoundTitle.WIN).play();
      } else {
        audioService.getAudio(SoundTitle.LOSE).play();
      }

      removeEventListener('keydown', handleKeydown);
    }

    return () => removeEventListener('keydown', handleKeydown);
  }, [handleKeydown, isMistakeLimitExceeded, isWordFilled]);

  return (
    <div className={styles.container}>
      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text={word.category} />

      <WordPattern phrase={word.title} openLetters={usedLetters} />

      <Keyboard usedLetters={usedLetters} onClick={handleKeyClick} />

      {isWordFilled() && <ResultModal word={word.title} />}

      {isMistakeLimitExceeded() && (
        <ResultModal word={word.title} isWon={false} />
      )}
    </div>
  );
};

export { Game };
