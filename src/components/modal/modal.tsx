import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export { Modal };
