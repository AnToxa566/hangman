import { Link } from 'react-router-dom';

import { AppPath, AppTitle, ButtonTitle } from '../../common/enums/enums';
import { Button, Level } from '../../components/components';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{AppTitle.HANGMAN}</h1>

      <Link to={AppPath.GAME}>
        <Button text={ButtonTitle.START_GAME} />
      </Link>

      <Level />
    </div>
  );
};

export { Home };
