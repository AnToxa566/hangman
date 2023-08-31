import { Navigate, Route, Routes } from 'react-router-dom';

import { Game, Home } from '../pages';
import { RootState } from '../../store/store';
import { useSelector } from '../../hooks/hooks';
import { AppPath } from '../../common/enums/enums';

import styles from './styles.module.scss';

const App = () => {
  const { isDark } = useSelector((state: RootState) => state.hangman);

  return (
    <div
      className={`${styles.app} ${
        isDark ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <Routes>
        <Route path={AppPath.ROOT} element={<Home />} />
        <Route path={AppPath.GAME} element={<Game />} />
        <Route path={AppPath.ANY} element={<Navigate to={AppPath.ROOT} />} />
      </Routes>
    </div>
  );
};

export default App;
