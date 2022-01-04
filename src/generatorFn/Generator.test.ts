import { Generator } from './Generator';

let generator: Generator;

describe('', () => {
  beforeEach(() => {
    generator = new Generator();
  });
  it('should add an item to the basket when asked', () => {
    expect(generator.getBasket()).toHaveLength(0);

    generator.add(42).next();
    expect(generator.getBasket()).toHaveLength(1);

    generator.add({ item: 'banane' }).next();
    expect(generator.getBasket()).toEqual([42, { item: 'banane' }]);

    expect(generator.add('test').next()).toEqual({
      done: false,
      value: 3,
    });

    expect(generator.add('test').return([])).toEqual({
      done: true,
      value: [],
    });
  });

  it('should clear my basket when asked', () => {
    generator.add(42).next();
    expect(generator.getBasket()).toHaveLength(1);

    generator.clear();
    expect(generator.getBasket()).toHaveLength(0);
  });
});
