import { useSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';

import styles from './styles.module.scss';

const Level = () => {
  const { level } = useSelector((state: RootState) => state.hangman);

  return <span className={styles.level}>Level {level}</span>;
};

export { Level };
