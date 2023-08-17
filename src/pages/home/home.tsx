import { AppTitle, ButtonTitle } from '../../common/enums/enums';
import { Button, Level } from '../../components/components';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{AppTitle.HANGMAN}</h1>

      <Button text={ButtonTitle.START_GAME} />

      <Level />
    </div>
  );
};

export { Home };
