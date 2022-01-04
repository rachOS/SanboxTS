import { Generator } from './Generator';

describe('', () => {
  it('should add an item to the basket when asked', () => {
    const generator = new Generator();

    expect(generator.getBasket()).toHaveLength(0);
    generator.add<number>(42);
    expect(generator.getBasket()).toHaveLength(1);
    generator.add({ item: 'banane' });
    expect(generator.getBasket()).toEqual([42, { item: 'banane' }]);
  });

  it('should had item when asked', () => {
    //generator.add<number>(42);
    //expect(generator.getBasket()).toHaveLength(1);
  });
});
