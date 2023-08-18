import styles from './styles.module.scss';

interface Props {
  letter: string;
  disable?: boolean;
}

const Key: React.FC<Props> = ({ letter, disable = false }) => {
  return (
    <div className={`${styles.key} ${disable ? styles.disable : ''}`}>
      {letter}
    </div>
  );
};

export { Key };
