export class Dollar implements IDollarProperties {
  amount: number;

  constructor(amount: number = 0) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public test(): void {
    this.amount = 0;
  }
}

interface IDollarProperties {
  amount: number;
}
