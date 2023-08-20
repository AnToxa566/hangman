import { Level } from './level/level.service';
import { AudioService } from './audio/audio.service';

const levelService = new Level();
const audioService = new AudioService();

export { levelService, audioService };
