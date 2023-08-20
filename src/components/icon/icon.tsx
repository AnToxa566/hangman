import { IconTitle } from '../../common/enums/enums';

interface Props {
  title: IconTitle;
  className?: string;
}

const Icon: React.FC<Props> = ({ title, className = '' }) => {
  return (
    <img src={`/public/icons/${title}.svg`} className={className} alt={title} />
  );
};

export { Icon };
