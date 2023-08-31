import { Link } from 'react-router-dom';

import { RootState } from '../../store/store';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { Button, Checkbox, Level } from '../../components/components';
import { AppPath, AppTitle, ButtonTitle } from '../../common/enums/enums';
import { actions as hangmanActionCreator } from '../../store/hangman/hangman';

import styles from './styles.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  const { isDark } = useSelector((state: RootState) => state.hangman);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{AppTitle.HANGMAN}</h1>

      <Link to={AppPath.GAME}>
        <Button text={ButtonTitle.START_GAME} />
      </Link>

      <Level />

      <Checkbox
        label="Dark mode"
        className={styles.checkbox}
        checked={isDark}
        onChange={() => dispatch(hangmanActionCreator.setDarkMode(!isDark))}
      />
    </div>
  );
};

export { Home };
