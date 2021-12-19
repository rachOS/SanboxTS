import { Demo } from '../Demo';

const demo = new Demo();

describe('', () => {
  it('demonstrate how it a test works with mock', () => {
    const message = demo.displayMessage();

    //expect(message).toBe('World');
    expect(message).toBe('Hello');
  });

  it('demonstrate how a simple mock works', () => {
    //const mockDisplayMessage = jest.fn();
    //const mockDisplayMessage = jest.fn(()=> { return "Blabla"});
    const mockDisplayMessage = jest.fn((): string => {
      return 'World';
    });

    demo.displayMessage = mockDisplayMessage;

    demo.displayMessage();

    expect(mockDisplayMessage).toHaveBeenCalled();
    expect(mockDisplayMessage).toHaveBeenCalledTimes(1);
    expect(mockDisplayMessage).toReturn();
    expect(mockDisplayMessage).toReturnWith('World');
  });

  it('demonstrate how a spy works', () => {
    const spyDisplayMessage = jest.spyOn(demo, 'displayMessage');
    //spyDisplayMessage.mockImplementation(() => { return 42})
    spyDisplayMessage.mockImplementation(() => {
      return 'World';
    });
    const message = demo.displayMessage();

    expect(spyDisplayMessage).toHaveBeenCalled();
    expect(spyDisplayMessage).toReturnWith('World');

    expect(message).toBe('World');
  });
});
