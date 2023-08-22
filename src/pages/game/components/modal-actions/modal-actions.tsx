import { Link } from 'react-router-dom';

import { IconButton } from '../../../../components/components';
import { AppPath, IconTitle } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

interface Props {
  onRestart?: () => void;
}

const ModalActions: React.FC<Props> = ({ onRestart }) => {
  return (
    <div className={styles.actions}>
      <Link to={AppPath.ROOT}>
        <IconButton iconTitle={IconTitle.HOME} />
      </Link>

      <IconButton iconTitle={IconTitle.RESTART} onClick={onRestart} />
    </div>
  );
};

export { ModalActions };
