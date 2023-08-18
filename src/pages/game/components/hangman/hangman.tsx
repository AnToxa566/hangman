interface Props {
  mistakesNum: number;
  className?: string;
}

const Hangman: React.FC<Props> = ({ mistakesNum, className = '' }) => {
  return (
    <img
      className={className}
      src={`/public/images/hangman-${mistakesNum}.png`}
    />
  );
};

export { Hangman };
