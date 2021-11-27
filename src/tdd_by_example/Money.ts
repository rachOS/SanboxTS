export class Money implements IMoney {
  constructor(protected amount: number = 0) {
    this.amount = amount;
  }

  public equal(money: Money): boolean {
    return money.amount === this.amount;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier);
  }
}

interface IMoney {
  equal(money: Money): boolean;
  times(multiplier: number): Money;
}
