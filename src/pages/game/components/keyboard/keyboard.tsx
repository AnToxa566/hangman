import { useMemo, useEffect, useCallback } from '../../../../hooks/hooks';
import { Key } from './components/components';
import { isLetterUsed } from '../../helpers/helpers';
import { getEnglishAlphabet } from './helpers/helpers';

import styles from './styles.module.scss';

interface Props {
  usedLetters: string[];
  onClick: (letter: string) => void;
}

const Keyboard: React.FC<Props> = ({ usedLetters, onClick }) => {
  const englishAlphabet = useMemo(getEnglishAlphabet, []);

  const isEnglishLetter = useCallback(
    (letter: string): boolean =>
      Boolean(
        englishAlphabet.find((lt) => lt.toLowerCase() === letter.toLowerCase())
      ),
    [englishAlphabet]
  );

  const handleKeyClick = useCallback(
    (letter: string) => onClick(letter),
    [onClick]
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent): void => {
      if (isEnglishLetter(event.key) && !isLetterUsed(usedLetters, event.key)) {
        onClick(event.key);
      }
    },
    [isEnglishLetter, onClick, usedLetters]
  );

  useEffect(() => {
    addEventListener('keydown', handleKeydown);

    return () => removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <div className={styles.keyboard}>
      {englishAlphabet.map((letter) => (
        <Key
          key={letter}
          letter={letter}
          onClick={handleKeyClick}
          disable={isLetterUsed(usedLetters, letter)}
        />
      ))}
    </div>
  );
};

export { Keyboard };
