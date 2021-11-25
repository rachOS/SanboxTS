import { Dollar } from '../Dollar';

/**
 * TODO
 * 5$ + 10 CHF = 10$ if rate is 2:1
 * - [x] 5$ * 2 = 10$
 * Make amount private
 * - [x] Dollar side-effect?
 * - [x] equals()
 * Money rounding
 */

describe('Dollar', () => {
  //let product: Dollar;
  it('money value should be multiplied by the given amount', () => {
    const money = new Dollar(5);
    let product = money.times(2);
    expect(product.amount).toEqual(10);
    product = money.times(5);
    expect(product.amount).toEqual(25);
  });

  it('two money with same amount should be equal', () => {
    let money = new Dollar(5);
    expect(money.equal(new Dollar(5))).toBeTruthy();
    expect(money.equal(new Dollar(6))).toBeFalsy();
  });
});
