import { StorageKey } from '../../common/enums/enums';
import { useEffect, useState } from '../../hooks/hooks';

import styles from './styles.module.scss';

const Level = () => {
  const DEFAULT_LEVEL_NUM = '1';

  const [levelNumber, setLevelNumber] = useState<string>();

  useEffect(() => {
    if (!localStorage.getItem(StorageKey.LEVEL_NUMBER)) {
      localStorage.setItem(StorageKey.LEVEL_NUMBER, DEFAULT_LEVEL_NUM);
    }

    setLevelNumber(
      localStorage.getItem(StorageKey.LEVEL_NUMBER) || DEFAULT_LEVEL_NUM
    );
  }, []);

  return <span className={styles.level}>Level {levelNumber}</span>;
};

export { Level };
