import { useMemo } from '../../../../hooks/hooks';
import { Key } from './components/components';
import { getEnglishAlphabet } from './helpers/helpers';

import styles from './styles.module.scss';

interface Props {
  usedLetters: string[];
}

const Keyboard: React.FC<Props> = ({ usedLetters }) => {
  const englishAlphabet = useMemo(getEnglishAlphabet, []);

  const isDisabled = (letter: string): boolean =>
    usedLetters.find((lt) => lt.toLowerCase() === letter.toLowerCase())
      ? true
      : false;

  return (
    <div className={styles.keyboard}>
      {englishAlphabet.map((letter) => (
        <Key key={letter} letter={letter} disable={isDisabled(letter)} />
      ))}
    </div>
  );
};

export { Keyboard };
