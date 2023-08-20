import { SoundTitle } from '../../common/enums/enums';

class AudioService {
  getAudio(soundTitle: SoundTitle): HTMLAudioElement {
    return new Audio(`/public/sounds/${soundTitle}.wav`);
  }
}

export { AudioService };
