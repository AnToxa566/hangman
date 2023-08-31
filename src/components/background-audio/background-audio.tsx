import { ReactNode } from 'react';

import { SoundTitle } from '../../common/enums/enums';
import { useState, useEffect } from '../../hooks/hooks';
import { audioService } from '../../services/services';

interface Props {
  children: ReactNode;
}

const BackgroundAudio: React.FC<Props> = ({ children }) => {
  const [audio] = useState(audioService.getAudio(SoundTitle.GAME));

  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play();
    }

    return () => audio.pause();
  }, [userInteracted, audio]);

  return <div onClick={() => setUserInteracted(true)}>{children}</div>;
};

export { BackgroundAudio };
