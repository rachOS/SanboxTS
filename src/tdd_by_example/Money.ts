class Money implements IMoney {
  constructor(protected amount: number = 0, protected currency: string = '') {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount: number, currency: string = '$'): Money {
    return new Money(amount, currency);
  }

  static euro(amount: number, currency: string = '€'): Money {
    return new Money(amount, currency);
  }

  equal(object: object): boolean {
    const money: Money = <Money>object;
    return (
      money.amount === this.amount && this.getCurrency() === money.getCurrency()
    );
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  getCurrency(): string {
    return this.currency;
  }
}

interface IMoney {
  equal(money: Money): boolean;
}

export default Money;
