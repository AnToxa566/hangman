import { useSelector } from '../../../../hooks/hooks';

import { IconTitle } from '../../../../common/enums/enums';
import { Icon } from '../../../../components/components';
import { RootState } from '../../../../store/store';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const Coins: React.FC<Props> = ({ className = '' }) => {
  const { coins } = useSelector((state: RootState) => state.hangman);

  return (
    <div className={`${styles.coins} ${className}`}>
      <Icon title={IconTitle.CIRCLE_COIN} />

      <span>{coins} coins</span>
    </div>
  );
};

export { Coins };
