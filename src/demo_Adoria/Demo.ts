export class Demo {
  options: object = {test : ""};
  public displayMessage(): string {
    return 'Hello';
  }

  say<T>(message: T): T {
    return message;
  }
}
