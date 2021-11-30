import Dollar from './Dollar';

abstract class Money implements IMoney {
  constructor(protected amount: number = 0, protected currency: string = '') {
    this.amount = amount;
    this.currency = currency;
  }

  equal(money: Money): boolean {
    return money.amount === this.amount && this.getClass() === money.getClass();
  }

  static dollar(amount: number, currency: string = '$'): Dollar {
    return new Dollar(amount, currency);
  }

  // static euro(amount: number): Euro {
  //   return new Euro(amount, '€');
  // }
  getCurrency(): string {
    return this.currency;
  }
  getClass(): string {
    return this.constructor.name;
  }
}

interface IMoney {
  equal(money: Money): boolean;
  getClass(): string;
}

export default Money;
