import { ModalActions, ModalTitle } from '../components';
import { Modal } from '../../../../components/components';
import { AppTitle } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

interface Props {
  onClose: () => void;
}

const MenuModal: React.FC<Props> = ({ onClose }) => {
  const handleClose = () => onClose();

  return (
    <Modal closable onClose={handleClose}>
      <div className={styles.modal}>
        <ModalTitle title={AppTitle.MENU} />
        <ModalActions />
      </div>
    </Modal>
  );
};

export { MenuModal };
