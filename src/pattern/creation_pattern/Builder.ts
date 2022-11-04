interface IPizzaBuilder {

  setSize(size: 29 | 33): void;

  setPastaType(type: 'thin' | 'fat'): void;

  setSauce(sauce: 'tomate' | 'creme fraiche'): void;

  setIngredient(ingredientList: Array<string>): void;

  addOlives(quantity: number): void;


}

class Calzone {
  name: string = 'calzone';
  olives: number = 0;
}

class FourCheeze {
}

class CalzoneBuilder implements IPizzaBuilder {

  constructor(public pizza: Calzone = new Calzone()) {
    this.startNewPizza();
  }

  setSize(size: 29 | 33): void {
  }

  addOlives(quantity: number = 0): void {
    this.pizza.olives = quantity;
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

  cookCalzone(builder: CalzoneBuilder): void {
    builder.addOlives(0);
  }

  cookFourCheese(builder: IPizzaBuilder): void {
    builder.setSauce('creme fraiche');
  }

}

const pizzaiolo = new Pizzaiolo();
const calzoneBuilder = new CalzoneBuilder()
pizzaiolo.cookCalzone(calzoneBuilder);
const calzone = calzoneBuilder.getPizza()
console.log("=>(Builder.ts:75) calzone", calzone);


export {};