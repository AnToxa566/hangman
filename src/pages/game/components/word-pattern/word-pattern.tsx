import styles from './styles.module.scss';

interface Props {
  word: string;
  openLetters: string[];
}

const WordPattern: React.FC<Props> = ({ word, openLetters }) => {
  return (
    <div className={styles.word}>
      {word
        .split('')
        .map((letter) =>
          openLetters.find((lt) => lt.toLowerCase() === letter.toLowerCase())
            ? letter.toUpperCase()
            : '_'
        )}
    </div>
  );
};

export { WordPattern };
