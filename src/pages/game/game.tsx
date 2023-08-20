import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useNavigate,
} from '../../hooks/hooks';
import {
  Hangman,
  Keyboard,
  MenuModal,
  ResultModal,
  WordPattern,
} from './components/components';
import {
  getEnglishAlphabet,
  getRandomWord,
  isLetterContained,
} from './helpers/helpers';
import { Hint, IconButton, Level } from '../../components/components';
import { Word } from '../../common/interfaces/interfaces';
import { IconTitle, SoundTitle } from '../../common/enums/enums';
import { MAX_MISTAKES } from '../../common/constants/constants';
import { audioService, levelService } from '../../services/services';

import styles from './styles.module.scss';

const Game = () => {
  const navigate = useNavigate();

  const [mistakesNumber, setMistakesNumber] = useState<number>(0);

  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

  const isGameOver = useCallback(
    (): boolean => isWordFilled() || isMistakeLimitExceeded(),
    [isMistakeLimitExceeded, isWordFilled]
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

    if (isGameOver()) {
      if (isWordFilled()) {
        levelService.incrementLevel();
        audioService.getAudio(SoundTitle.WIN).play();
      } else {
        audioService.getAudio(SoundTitle.LOSE).play();
      }

      removeEventListener('keydown', handleKeydown);
    }

    return () => removeEventListener('keydown', handleKeydown);
  }, [handleKeydown, isGameOver, isWordFilled]);

  return (
    <div className={styles.container}>
      <IconButton
        iconTitle={IconTitle.MENU}
        onClick={() => setIsMenuOpen(true)}
        className={styles.menu}
      />

      <Level />

      <Hangman className={styles.hangman} mistakesNum={mistakesNumber} />

      <Hint text={word.category} />

      <WordPattern phrase={word.title} openLetters={usedLetters} />

      <Keyboard usedLetters={usedLetters} onClick={handleKeyClick} />

      <ResultModal
        word={word.title}
        isOpen={isGameOver()}
        isWon={isWordFilled()}
        onRestart={() => navigate(0)}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onRestart={() => navigate(0)}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export { Game };
