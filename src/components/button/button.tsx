import { SoundTitle } from '../../common/enums/enums';
import { audioService } from '../../services/services';

import styles from './styles.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  const audio = audioService.getAudio(SoundTitle.BUTTON_CLICK);

  const handleClick = () => {
    audio.play();
    onClick?.();
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};

export { Button };
