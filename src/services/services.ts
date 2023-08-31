import { Coins } from './coins/coins.service';
import { Level } from './level/level.service';
import { DarkMode } from './dark-mode/dark-mode.service';
import { AudioService } from './audio/audio.service';

const coinService = new Coins();
const levelService = new Level();
const darkModeService = new DarkMode();
const audioService = new AudioService();

export { coinService, levelService, darkModeService, audioService };
