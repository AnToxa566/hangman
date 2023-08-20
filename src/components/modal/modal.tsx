import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({
  children,
  closable = false,
  onClose = () => {},
}) => {
  const handleClose = () => onClose();

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {closable && (
          <button className={styles['close-btn']} onClick={handleClose}>
            X
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

export { Modal };
