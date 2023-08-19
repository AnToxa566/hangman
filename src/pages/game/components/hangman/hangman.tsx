import { MAX_MISTAKES } from '../../../../common/constants/constants';

interface Props {
  mistakesNum: number;
  className?: string;
}

const Hangman: React.FC<Props> = ({ mistakesNum, className = '' }) => {
  return (
    <img
      className={className}
      src={`/public/images/hangman-${
        mistakesNum <= MAX_MISTAKES ? mistakesNum : MAX_MISTAKES
      }.png`}
    />
  );
};

export { Hangman };
