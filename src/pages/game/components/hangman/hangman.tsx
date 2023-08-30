import { MAX_MISTAKES } from '../../../../common/constants/constants';

import styles from './styles.module.scss';

interface Props {
  mistakesNum: number;
  className?: string;
}

const Hangman: React.FC<Props> = ({ mistakesNum, className = '' }) => {
  return (
    <img
      className={`${styles.hangmanImg} ${className}`}
      src={`/images/hangman-${
        mistakesNum <= MAX_MISTAKES ? mistakesNum : MAX_MISTAKES
      }.png`}
    />
  );
};

export { Hangman };
