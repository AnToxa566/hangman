import { Link } from 'react-router-dom';

import { useNavigate } from '../../../../hooks/hooks';
import { IconButton } from '../../../../components/components';
import { AppPath, IconTitle } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

const ModalActions = () => {
  const navigate = useNavigate();

  const handleRestart = () => navigate(0);

  return (
    <div className={styles.actions}>
      <Link to={AppPath.ROOT}>
        <IconButton iconTitle={IconTitle.HOME} />
      </Link>

      <IconButton iconTitle={IconTitle.RESTART} onClick={handleRestart} />
    </div>
  );
};

export { ModalActions };
