import { useMemo, useCallback } from '../../../../hooks/hooks';
import { Key } from './components/components';
import {
  isLetterContained,
  getEnglishAlphabet,
} from '../../../../helpers/helpers';

import styles from './styles.module.scss';

interface Props {
  usedLetters: string[];
  onClick: (letter: string) => void;
}

const Keyboard: React.FC<Props> = ({ usedLetters, onClick }) => {
  const englishAlphabet = useMemo(getEnglishAlphabet, []);

  const handleKeyClick = useCallback(
    (letter: string) => onClick(letter),
    [onClick]
  );

  return (
    <div className={styles.keyboard}>
      {englishAlphabet.map((letter) => (
        <Key
          key={letter}
          letter={letter}
          onClick={handleKeyClick}
          disable={isLetterContained(usedLetters, letter)}
        />
      ))}
    </div>
  );
};

export { Keyboard };
