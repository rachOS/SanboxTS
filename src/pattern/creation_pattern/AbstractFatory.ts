interface IAbstractFactory {
  createWatchDog(): IWatchDog;
  createHuntDog(): IHuntDog;
}

interface IWatchDog {
  bark(): string;
}

interface IHuntDog {
  search(): boolean;
  anotherUsefulFunctionB(collaborator : IWatchDog): string
}

class DogFactoryA implements IAbstractFactory {
  createWatchDog(): IWatchDog {
    return new BelgianShepard();
  }

  createHuntDog(): IHuntDog {
    return new IrishSetter();
  }
}

class DogFactoryB implements IAbstractFactory {
  createHuntDog(): IHuntDog {
    return new Griffon();
  }

  createWatchDog(): IWatchDog {
    return new Rotweiler();
  }
}

class IrishSetter implements IHuntDog {
  search(): boolean {
    return false;
  }

  anotherUsefulFunctionB(collaborator: BelgianShepard): string {
    return 'i am a IrishSetter collaborating with BelgianShepard';
  }

}

class BelgianShepard implements IWatchDog {
  bark(): string {
    return 'WOF WOF';
  }

}


class Griffon implements IHuntDog {
  search(): boolean {
    return true;
  }

  anotherUsefulFunctionB(collaborator: Rotweiler): string {
    return 'i am a Griffon collaborating with Rotweiler';
  }

}

class Rotweiler implements IWatchDog {
  bark(): string {
    return 'GRRRRR';
  }

}

function clientCode(factory: IAbstractFactory) {
  const dogA = factory.createHuntDog();
  const dogB = factory.createWatchDog();

  console.log("bark", dogB.bark());
  console.log("is searching ?", dogA.search());
  console.log("team with",dogA.anotherUsefulFunctionB(dogB));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new DogFactoryA())

console.log('');

console.log('Client: Testing client code with the second factory type...');
clientCode(new DogFactoryB())

export {};