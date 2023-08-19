import { Link } from 'react-router-dom';
import { AppPath, AppTitle } from '../../../../common/enums/enums';
import { Modal } from '../../../../components/components';
import { COINS_FOR_VICTORY } from '../../../../common/constants/constants';

import styles from './styles.module.scss';

interface Props {
  word: string;
  isWon?: boolean;
}

const ResultModal: React.FC<Props> = ({ word, isWon = true }) => {
  const handleRestart = () => window.location.reload();

  return (
    <Modal>
      <div className={styles.modal}>
        <h2 className={`${styles.title} ${isWon ? styles.green : styles.red}`}>
          {isWon ? AppTitle.YOU_WON : AppTitle.GAME_OVER}
        </h2>

        <div className={styles.contet}>
          <span className={styles.word}>
            The word was: <span className={styles.uppercase}>{word}</span>
          </span>

          {isWon && (
            <span className={styles.coins}>
              +{COINS_FOR_VICTORY} coins{' '}
              <img src="/public/icons/coin.svg" alt="coin" />
            </span>
          )}
        </div>

        <div className={styles.footer}>
          <Link to={AppPath.ROOT}>
            <img src="/public/icons/home.svg" alt="home" />
          </Link>

          <button onClick={handleRestart}>
            <img src="/public/icons/restart.svg" alt="restart" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { ResultModal };
