import { IconTitle } from '../../common/enums/enums';

interface Props {
  title: IconTitle;
  className?: string;
}

const Icon: React.FC<Props> = ({ title, className = '' }) => {
  return <img src={`/icons/${title}.svg`} className={className} alt={title} />;
};

export { Icon };
