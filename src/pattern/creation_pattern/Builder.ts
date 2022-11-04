interface IPizzaBuilder {

  setSize(size: 29 | 33): void;

  setPastaType(type: 'thin' | 'fat'): void;

  setSauce(sauce: 'tomate' | 'creme fraiche'): void;

  setIngredient(ingredientList: Array<string>): void;

  addOlives(quantity: number): void;


}

class Calzone {
  infos: Map<string, any> = new Map();

}

class FourCheeze {
}

class CalzoneBuilder implements IPizzaBuilder {
  private pizza: Calzone = new Calzone();

  constructor() {
    this.startNewPizza();
  }

  setName(): void {
    this.pizza.infos.set('name', 'calzone');
  }

  setSize(size: 29 | 33): void {
  }

  addOlives(quantity: number = 0): void {
    this.pizza.infos.set('olives', quantity);
  }

  setIngredient(ingredientList: Array<string>): void {
  }

  setPastaType(type: 'thin' | 'fat'): void {
  }

  setSauce(sauce: 'tomate' | 'creme fraiche'): void {
  }

  private startNewPizza(): void {
    this.pizza = new Calzone();
  }

  getPizza(): Calzone {
    const calzone = this.pizza;
    this.startNewPizza();
    return calzone;
  }

}

class Pizzaiolo {

  cookCalzone(builder: CalzoneBuilder): void { // todo replace by a generetor function
    builder.setName();
    builder.addOlives(0);
  }

  *cookFourCheese(builder: IPizzaBuilder) {
    yield "done"
  }

}

const pizzaiolo = new Pizzaiolo();
const calzoneBuilder = new CalzoneBuilder();

pizzaiolo.cookCalzone(calzoneBuilder);

const calzone = calzoneBuilder.getPizza();

console.log('=>(Builder.ts:75) calzone', calzone);

export {};