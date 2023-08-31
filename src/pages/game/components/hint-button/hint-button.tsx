import { useAppDispatch } from '../../../../hooks/hooks';

import { IconTitle } from '../../../../common/enums/enums';
import { Icon, IconButton } from '../../../../components/components';
import { HINT_COST } from '../../../../common/constants/constants';
import { actions as hangmanActionCreator } from '../../../../store/hangman/hangman';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const HintButton: React.FC<Props> = ({ className = '' }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(hangmanActionCreator.useHint());
  };

  return (
    <div className={`${styles.hint} ${className}`}>
      <div className={styles.cost}>
        x{HINT_COST} <Icon className={styles.coinIcon} title={IconTitle.COIN} />
      </div>
      <IconButton iconTitle={IconTitle.BLUB} onClick={handleClick} />
    </div>
  );
};

export { HintButton };
