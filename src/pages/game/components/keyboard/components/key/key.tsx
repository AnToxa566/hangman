import styles from './styles.module.scss';

interface Props {
  letter: string;
  onClick: (letter: string) => void;
  disable?: boolean;
}

const Key: React.FC<Props> = ({ letter, onClick, disable = false }) => {
  const handleClick = () => onClick(letter);

  return (
    <button
      className={`${styles.key} ${disable ? styles.disable : ''}`}
      onClick={handleClick}
      disabled={disable}
    >
      {letter}
    </button>
  );
};

export { Key };
