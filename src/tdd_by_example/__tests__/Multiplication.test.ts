import { Dollar } from '../Dollar';
import { Euro } from '../Euro';

describe('Money', () => {
  describe('$', () => {
    let money: Dollar;
    it('money value should be multiplied by the given amount', () => {
      money = new Dollar(5);
      expect(money.times(2)).toEqual(new Dollar(10));
      expect(money.times(3.7)).toEqual(new Dollar(18.5));
    });

    it('two money with same amount should be equal', () => {
      let money = new Dollar(5);
      expect(money.equal(new Dollar(5))).toBeTruthy();
      expect(money.equal(new Dollar(6))).toBeFalsy();
    });
  });

  describe('€', () => {
    let money: Euro;
    it('money value should be multiplied by the given amount', () => {
      money = new Euro(5);
      expect(money.times(2)).toEqual(new Euro(10));
      expect(money.times(3.7)).toEqual(new Euro(18.5));
    });

    it('two money with same amount should be equal', () => {
      let money = new Euro(5);
      expect(money.equal(new Euro(5))).toBeTruthy();
      expect(money.equal(new Euro(6))).toBeFalsy();
    });
  });
});
