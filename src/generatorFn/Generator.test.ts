import { Generator } from './Generator';

describe('', () => {
  it('should add an item to the basket when asked', () => {
    const generator = new Generator();
    expect(generator.getBasket()).toHaveLength(0);
    generator.add<string>('item');
    expect(generator.getBasket()).toHaveLength(1);
    generator.add<number>(42);
    expect(generator.getBasket()).toHaveLength(2);
    generator.add({ item: 'banane' });
    expect(generator.getBasket()).toContain('item');
    expect(generator.getBasket()).toEqual(['item', 42, { item: 'banane' }]);
  });
});
