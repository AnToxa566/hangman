import { ModalActions, ModalTitle } from '../components';
import { Icon, Modal } from '../../../../components/components';
import { AppTitle, IconTitle } from '../../../../common/enums/enums';
import { COINS_FOR_VICTORY } from '../../../../common/constants/constants';

import styles from './styles.module.scss';

interface Props {
  word: string;
  isWon?: boolean;
}

const ResultModal: React.FC<Props> = ({ word, isWon = true }) => {
  return (
    <Modal>
      <div className={styles.modal}>
        <ModalTitle
          title={isWon ? AppTitle.YOU_WON : AppTitle.GAME_OVER}
          className={`${isWon ? styles.green : styles.red}`}
        />

        <div className={styles.contet}>
          <span className={styles.word}>
            The word was: <span className={styles.uppercase}>{word}</span>
          </span>

          {isWon && (
            <span className={styles.coins}>
              +{COINS_FOR_VICTORY} coins <Icon title={IconTitle.COIN} />
            </span>
          )}
        </div>

        <ModalActions />
      </div>
    </Modal>
  );
};

export { ResultModal };
