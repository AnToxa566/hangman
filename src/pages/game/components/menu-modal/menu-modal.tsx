import { ModalActions, ModalTitle } from '../components';
import { Modal } from '../../../../components/components';
import { AppTitle } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  onRestart: () => void;
  onClose: () => void;
}

const MenuModal: React.FC<Props> = ({ isOpen, onRestart, onClose }) => {
  const handleClose = () => onClose();

  return (
    <Modal isOpen={isOpen} closable onClose={handleClose}>
      <div className={styles.modal}>
        <ModalTitle title={AppTitle.MENU} />
        <ModalActions onRestart={onRestart} />
      </div>
    </Modal>
  );
};

export { MenuModal };
