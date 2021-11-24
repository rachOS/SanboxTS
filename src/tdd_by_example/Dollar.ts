/**
 * TODO
 * 5$ + 10 CHF = 10$ if rate is 2:1
 * - [x] 5$ * 2 = 10$
 * Make amount private
 * Dollar side-effect?
 * Money rounding
 */

export class Dollar implements IDollarProperties {
  constructor(public amount: number = 0) {
    this.amount = amount;
  }

  public times(multiplier: number): number {
    return (this.amount *= multiplier);
    // return new Dollar(this.amount * multiplier);
  }
}

interface IDollarProperties {
  amount: number;
}
