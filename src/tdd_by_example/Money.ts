import { Dollar } from './Dollar';

export abstract class Money implements IMoney {
  constructor(protected amount: number = 0) {
    this.amount = amount;
  }

  equal(money: Money): boolean {
    return money.amount === this.amount && this.getClass() === money.getClass();
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }
  getClass(): string {
    return this.constructor.name;
  }
}

interface IMoney {
  equal(money: Money): boolean;
  getClass(): string;
}
