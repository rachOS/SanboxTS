import Dollar from '../Dollar';
import Euro from '../Euro';
import Money from '../Money';

describe('Money', () => {
  describe('$', () => {
    it('money value should be multiplied by the given amount', () => {
      expect(Money.dollar(5).times(2)).toEqual(Money.dollar(10));
      expect(Money.dollar(5).times(3.7)).toEqual(Money.dollar(18.5));
    });

    it('two money with same amount should be equal', () => {
      expect(Money.dollar(5).equal(Money.dollar(5))).toBeTruthy();
      expect(Money.dollar(5).equal(Money.dollar(6))).toBeFalsy();
    });
  });

  describe('Currencies', () => {
    it('different currency should not be equal', () => {
      const euro = new Euro(5, '€');
      const dollar = new Dollar(5, '$');
      expect(euro.equal(dollar)).toBeFalsy();
    });

    it('the money should have the right currency', () => {
      expect('$').toEqual(Money.dollar(5).getCurrency());
    });
  });
});
