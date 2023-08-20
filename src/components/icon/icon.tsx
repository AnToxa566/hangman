import { IconTitle, SoundTitle } from '../../common/enums/enums';
import { audioService } from '../../services/services';

interface Props {
  title: IconTitle;
  clicable?: boolean;
}

const Icon: React.FC<Props> = ({ title, clicable = false }) => {
  const audio = audioService.getAudio(SoundTitle.BUTTON_CLICK);

  const handleClick = () => {
    if (clicable) {
      audio.play();
    }
  };

  return (
    <img src={`/public/icons/${title}.svg`} alt={title} onClick={handleClick} />
  );
};

export { Icon };
