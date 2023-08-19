import { useEffect, useState } from '../../hooks/hooks';
import { levelService } from '../../services/services';

import styles from './styles.module.scss';

const Level = () => {
  const [levelNumber, setLevelNumber] = useState<number>();

  useEffect(() => {
    setLevelNumber(levelService.getLevel());
  }, []);

  return <span className={styles.level}>Level {levelNumber}</span>;
};

export { Level };
