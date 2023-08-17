import { Navigate, Route, Routes } from 'react-router-dom';

import { Game, Home } from '../pages';
import { AppPath } from '../../common/enums/enums';

const App = () => {
  return (
    <Routes>
      <Route path={AppPath.ROOT} element={<Home />} />
      <Route path={AppPath.GAME} element={<Game />} />
      <Route path={AppPath.ANY} element={<Navigate to={AppPath.ROOT} />} />
    </Routes>
  );
};

export default App;
