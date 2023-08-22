import { StorageKey } from '../../common/enums/enums';

class Coins {
  private DEFAULT_COINS = 50;

  getCoins(): number {
    if (!localStorage.getItem(StorageKey.COINS)) {
      localStorage.setItem(StorageKey.COINS, this.DEFAULT_COINS.toString());
    }

    return Number(localStorage.getItem(StorageKey.COINS)) || this.DEFAULT_COINS;
  }

  incrementCoins(addCoins: number): number {
    const coins = Number(localStorage.getItem(StorageKey.COINS));
    const totalCoins = coins + addCoins;

    if (typeof coins === 'number' && !isNaN(coins)) {
      localStorage.setItem(StorageKey.COINS, totalCoins.toString());
    }

    return totalCoins;
  }
}

export { Coins };
