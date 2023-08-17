import { AppTitle } from '../../common/enums/enums';
import { Button } from '../../components/components';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{AppTitle.HANGMAN}</h1>

      <Button text="Start game" />

      <span className={styles.level}>Level 1</span>
    </div>
  );
};

export { Home };
