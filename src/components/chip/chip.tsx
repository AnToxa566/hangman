import styles from './styles.module.scss';

interface Props {
  text: string;
}

const Chip: React.FC<Props> = ({ text }) => {
  return <span className={styles.hint}>{text}</span>;
};

export { Chip };
