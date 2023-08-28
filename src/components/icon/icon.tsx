import { IconTitle } from '../../common/enums/enums';

import styles from './styles.module.scss';

interface Props {
  title: IconTitle;
  className?: string;
}

const Icon: React.FC<Props> = ({ title, className = '' }) => {
  return (
    <img
      src={`/icons/${title}.svg`}
      className={`${styles.icon} ${className}`}
      alt={title}
    />
  );
};

export { Icon };
