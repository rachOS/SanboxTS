import Money from './Money';

class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier, this.currency);
  }
}

export default Dollar;
