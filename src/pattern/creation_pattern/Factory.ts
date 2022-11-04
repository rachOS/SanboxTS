interface Dog {
  rerender(): void;

  attack(): void;
}

abstract class DogCreator {
  abstract createDog(): Dog

  render() {
    const dog: Dog = this.createDog();
    dog.rerender();

    return `Creator: The same creator's code has just worked with ${dog.rerender()}`;
  }
}

class HuntingDogCreator extends DogCreator {
  createDog(): Dog {
    return new IrishSetter();
  }
}

class WatchDogCreator extends DogCreator {
  createDog(): Dog {
    return new BelgianShepard();
  }
}

class IrishSetter implements Dog {
  rerender(): string {
    return '{Result of the IrishSetter}';
  }

  attack() {
    console.log('sniffing');
  }
}

class BelgianShepard implements Dog {
  rerender(): string {
    return '{Result of the BelgianShepard}';
  }

  attack() {
    console.log('grrrr');
  }
}

class App {

  constructor(public creator: DogCreator) {
    this.init();
  }

  init() {
    console.log(this.creator.render());
  }

}

new App(new WatchDogCreator());
console.log('');
new App(new HuntingDogCreator());


export {};