import { mocked } from 'ts-jest/utils';
import { Dollar } from '../Dollar';
/* jest.mock('../Dollar');

const mDollar = mocked(Dollar, true); */

describe('Dollar', () => {
  /*  beforeAll(() => {
    mDollar.mockImplementation(function (amount: number = 0): Dollar {
      return {
        amount: amount,
        times: jest.fn(function (multiplier: number): Dollar {
          return new Dollar(multiplier);
        }),
        test: () => {},
      };
    });
  });
  beforeEach(() => {
    mDollar.mockClear();
  }); */
  test('constructor', () => {
    //expect(Dollar).not.toHaveBeenCalled();
    /*    const zero = new Dollar(5);
    let prod = zero.times(5);
    expect(prod.amount).toBe(25);
    // expect(Dollar).toHaveBeenCalled();
    // expect(Dollar).toHaveBeenCalledTimes(1);
    zero.test();
    expect(zero.amount).toBe(0); */
    const { Dollar } = require('../Dollar');
    const d = new Dollar(25);
    console.log(Dollar);
    expect(d.amount).toBe(25);
  });
  it('', () => {});
});

export {};
