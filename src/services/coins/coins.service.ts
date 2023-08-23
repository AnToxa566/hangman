import { StorageKey } from '../../common/enums/enums';

class Coins {
  private DEFAULT_COINS = 50;

  private setCoins(coins: number): void {
    if (typeof coins === 'number' && !isNaN(coins)) {
      localStorage.setItem(StorageKey.COINS, coins.toString());
    }
  }

  getCoins(): number {
    const coins = Number(localStorage.getItem(StorageKey.COINS));

    if (typeof coins !== 'number' || isNaN(coins)) {
      this.setCoins(this.DEFAULT_COINS);
      return this.DEFAULT_COINS;
    }

    return coins;
  }

  incrementCoins(addCoins: number): number {
    this.setCoins(this.getCoins() + addCoins);
    return this.getCoins();
  }

  decrementCoins(removeCoins: number): number {
    this.setCoins(this.getCoins() - removeCoins);
    return this.getCoins();
  }
}

export { Coins };
