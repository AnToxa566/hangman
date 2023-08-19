import { useEffect, useState } from '../../../../hooks/hooks';

import styles from './styles.module.scss';

interface Props {
  phrase: string;
  openLetters: string[];
}

const WordPattern: React.FC<Props> = ({ phrase, openLetters }) => {
  const [words, setWords] = useState<string[]>();

  const isLetterOpen = (letter: string): boolean =>
    Boolean(
      openLetters.find((lt) => lt.toLowerCase() === letter.toLowerCase())
    );

  const getSymbol = (letter: string): string =>
    isLetterOpen(letter) ? letter.toUpperCase() : '_';

  useEffect(() => {
    setWords(phrase.split(' '));
  }, [phrase]);

  return words ? (
    <div className={styles.words}>
      {words.map((word, index) => (
        <div key={word + index} className={styles.word}>
          {word.split('').map((letter) => getSymbol(letter))}
        </div>
      ))}
    </div>
  ) : (
    <>Loading...</> // TODO: Loading Component
  );
};

export { WordPattern };
