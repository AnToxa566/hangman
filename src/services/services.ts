import { Coins } from './coins/coins.service';
import { Level } from './level/level.service';
import { AudioService } from './audio/audio.service';

const coinService = new Coins();
const levelService = new Level();
const audioService = new AudioService();

export { coinService, levelService, audioService };
