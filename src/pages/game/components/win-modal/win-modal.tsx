import { AppTitle } from '../../../../common/enums/enums';
import { Modal } from '../../../../components/components';

import styles from './styles.module.scss';

interface Props {
  word: string;
  coins: number;
}

const WinModal: React.FC<Props> = ({ word, coins }) => {
  return (
    <Modal>
      <div className={styles.modal}>
        <h2 className={styles.title}>{AppTitle.YOU_WON}</h2>

        <div className={styles.contet}>
          <span className={styles.word}>
            The word was: <span className={styles.uppercase}>{word}</span>
          </span>

          <span className={styles.coins}>
            +{coins} coins <img src="/public/icons/coin.svg" alt="coin" />
          </span>
        </div>

        <div className={styles.footer}>
          <button>
            <img src="/public/icons/home.svg" alt="home" />
          </button>

          <button>
            <img src="/public/icons/restart.svg" alt="restart" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { WinModal };
