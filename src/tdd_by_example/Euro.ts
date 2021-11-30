import Money from './Money';

class Euro extends Money {
  constructor(amount: number, currency: string = '€') {
    super(amount, currency);
  }
  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier);
  }
}

export default Euro;
