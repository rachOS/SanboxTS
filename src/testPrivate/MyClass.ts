import AnotherClass from './AnotherClass';

export class MyClass {
  private initAnotherClass(): AnotherClass {
    return new AnotherClass({ id: 42, name: 'cool name' });
  }
  getPrivateData() {
    return { anotherClass: this.initAnotherClass() };
  }
}
