import { StorageKey } from '../../common/enums/enums';

class Level {
  private DEFAULT_LEVEL_NUM = 1;

  getLevel(): number {
    if (!localStorage.getItem(StorageKey.LEVEL_NUMBER)) {
      localStorage.setItem(
        StorageKey.LEVEL_NUMBER,
        this.DEFAULT_LEVEL_NUM.toString()
      );
    }

    return (
      Number(localStorage.getItem(StorageKey.LEVEL_NUMBER)) ||
      this.DEFAULT_LEVEL_NUM
    );
  }

  incrementLevel(): number {
    const level = Number(localStorage.getItem(StorageKey.LEVEL_NUMBER));

    if (typeof level === 'number' && !isNaN(level)) {
      localStorage.setItem(StorageKey.LEVEL_NUMBER, (level + 1).toString());
    }

    return level + 1;
  }
}

export { Level };
