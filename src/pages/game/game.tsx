import {
  useState,
  useEffect,
  useCallback,
  useDispatch,
  useSelector,
  useMemo,
} from '../../hooks/hooks';

import {
  Hangman,
  Keyboard,
  MenuModal,
  ResultModal,
  WordPattern,
} from './components/components';

import { Hint, IconButton, Level } from '../../components/components';

import { isLetterContained, getEnglishAlphabet } from '../../helpers/helpers';
import { IconTitle } from '../../common/enums/enums';

import { RootState } from '../../store/store';
import { chooseLetter, restartGame } from '../../store/hangman/hangman.slice';

import styles from './styles.module.scss';

const Game = () => {
  const dispatch = useDispatch();

  const { word, usedLetters, mistakesNumber, isGameOver, isWon } = useSelector(
    (state: RootState) => state.hangman
  );

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isResultModalOpen, setIsResultModalOpen] = useState<boolean>(false);

  const englishAlphabet = useMemo(getEnglishAlphabet, []);

  const handleKeyClick = useCallback(
    (letter: string) => {
      dispatch(chooseLetter(letter));
    },
    [dispatch]
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent): void => {
      if (
        isLetterContained(englishAlphabet, event.key) &&
        !isLetterContained(usedLetters, event.key)
      ) {
        dispatch(chooseLetter(event.key));
      }
    },
    [englishAlphabet, usedLetters, dispatch]
  );

  const handleRestart = () => {
    setIsMenuOpen(false);
    setIsResultModalOpen(false);

    setTimeout(() => dispatch(restartGame()), 1200);
  };

  useEffect(() => {
    addEventListener('keydown', handleKeydown);

    if (isGameOver) {
      setIsResultModalOpen(true);
      removeEventListener('keydown', handleKeydown);
    }

    return () => removeEventListener('keydown', handleKeydown);
  }, [isGameOver, handleKeydown]);

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
        isOpen={isResultModalOpen}
        isWon={isWon}
        onRestart={handleRestart}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onRestart={handleRestart}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export { Game };
