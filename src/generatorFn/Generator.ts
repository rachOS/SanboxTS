export class Generator {
  private readonly basket: Unknown = [];

  add<T>(item: T): void {
    this.basket.push(item);
  }

  getBasket(): Unknown {
    return this.basket;
  }
}

type Unknown = Array<unknown>;
