export class Dollar implements IDollarProperties {
  constructor(public amount: number = 0) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equal(money: Dollar): boolean {
    return money.amount === this.amount;
  }
}

interface IDollarProperties {
  amount: number;
}
