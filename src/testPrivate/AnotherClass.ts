export default class AnotherClass {
  constructor(private options: { id: number; name: string }) {
    this.options = options;

    this.init();
  }

  private init(): void {}
}
