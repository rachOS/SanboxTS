import { mocked } from 'ts-jest/utils';
import { Demo } from '../Demo';

jest.mock('../Demo.ts');

const mockDemo = mocked(Demo, true);

describe('Mocked Class', () => {
  beforeEach(() => {
    mockDemo.mockClear();
  });

  it('show how a  mocked class works', () => {
    expect(mockDemo).not.toHaveBeenCalled();

    const demo = new Demo();

    expect(mockDemo).toHaveBeenCalled();

    demo.displayMessage()
    expect(mockDemo.prototype.displayMessage).toHaveBeenCalled();


  });

  it('show how to implement a mocked function in a mocked class (part one)', () => {
    mockDemo.prototype.displayMessage.mockReturnValue("Salut")

    const demo = new Demo();

    demo.displayMessage()

    expect(mockDemo.prototype.displayMessage).toHaveBeenCalled();
    expect(mockDemo.prototype.displayMessage).toHaveReturned();
    expect(mockDemo.prototype.displayMessage).toHaveReturnedWith("Salut");
  })
  
  it('show how to implement a mocked function in a mocked class (part two)', () => {
    mockDemo.prototype.displayMessage.mockReturnValue("Bonjour")
    //mockDemo.prototype.displayMessage.mockReturnValue(42)

    const demo = new Demo();

    demo.displayMessage()

    expect(mockDemo.prototype.displayMessage).toHaveReturnedWith("Bonjour");
    expect(mockDemo.prototype.displayMessage).not.toHaveReturnedWith("Salut");
  })
});

export { };

