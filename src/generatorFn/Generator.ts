export class Generator {
  private readonly basket: Unknown = [];
  *add(item: unknown): Generator<number, Unknown, unknown> {
    yield this.basket.push(item);

    return this.basket;
  }

  getBasket(): Unknown {
    return this.basket;
  }

  clear(): void {
    this.basket.length = 0;
  }
}

type Unknown = Array<unknown>;
