import { IconTitle, SoundTitle } from '../../common/enums/enums';
import { audioService } from '../../services/services';
import { Icon } from '../components';

import styles from './styles.module.scss';

interface Props {
  iconTitle: IconTitle;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<Props> = ({
  iconTitle,
  onClick = () => {},
  className = '',
}) => {
  const audio = audioService.getAudio(SoundTitle.BUTTON_CLICK);

  const handleClick = () => {
    audio.play();
    onClick();
  };

  return (
    <button className={`${styles.button} ${className}`} onClick={handleClick}>
      <Icon title={iconTitle} />
    </button>
  );
};

export { IconButton };
