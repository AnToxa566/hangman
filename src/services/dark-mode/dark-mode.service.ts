import { StorageKey } from '../../common/enums/enums';

class DarkMode {
  private DARK_MODE_OFF = '0';

  private DARK_MODE_ON = '1';

  getDarkMode(): boolean {
    if (localStorage.getItem(StorageKey.DARK_MODE) === null) {
      localStorage.setItem(StorageKey.DARK_MODE, this.DARK_MODE_OFF);
    }

    return localStorage.getItem(StorageKey.DARK_MODE) === this.DARK_MODE_ON;
  }

  setDarkMode(isDark: boolean): void {
    localStorage.setItem(
      StorageKey.DARK_MODE,
      isDark ? this.DARK_MODE_ON : this.DARK_MODE_OFF
    );
  }
}

export { DarkMode };
