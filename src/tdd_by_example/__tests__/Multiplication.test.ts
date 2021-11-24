import { mocked } from 'ts-jest/utils';
import { Dollar } from '../Dollar';

describe('Dollar', () => {
  //let product: Dollar;
  it('my money value should be multiplied by the given amount', () => {
    const money: Dollar = new Dollar(5);
    money.times(2);
    expect(money.amount).toEqual(10);
  });
});
