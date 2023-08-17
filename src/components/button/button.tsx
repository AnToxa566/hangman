import styles from './styles.module.scss';

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export { Button };
