import { Money } from './Money';

export class Euro extends Money {
  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }
}
