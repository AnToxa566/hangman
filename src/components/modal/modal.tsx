import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  closable = false,
  onClose = () => {},
}) => {
  return (
    <>
      {isOpen && <div className={styles.backdrop} />}

      <CSSTransition
        in={isOpen}
        timeout={1100}
        classNames={{
          enterActive: styles.modalEnterActive,
          exitActive: styles.modalExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {closable && (
              <button className={styles.closeBtn} onClick={onClose}>
                X
              </button>
            )}

            {children}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export { Modal };
