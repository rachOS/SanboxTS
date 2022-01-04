import { isDeepStrictEqual } from 'util';
import AnotherClass from '../AnotherClass';
import { MyClass } from '../MyClass';


describe('MyClass', () => {
  it('should give all info I need', () => {
    const myclass = new MyClass();
    const getPrivateData = myclass.getPrivateData();

    const exampleProto = Object.getPrototypeOf(myclass);

    expect(getPrivateData).toMatchObject({});
    expect(getPrivateData.anotherClass).toBeDefined();
    expect(getPrivateData.anotherClass).toMatchObject(
      new AnotherClass({ id: 42, name: 'cool name' })
    );
    expect(isDeepStrictEqual({}, {})).toBeTruthy()
    expect.objectContaining({})
  });

  it('should be able to test a private method' , ()=> {
    const myclass = new MyClass();

    const exampleProto = Object.getPrototypeOf(myclass);
    expect(exampleProto.initAnotherClass()).toEqual(new AnotherClass({ id: 42, name: 'cool name' }))

  })
});
