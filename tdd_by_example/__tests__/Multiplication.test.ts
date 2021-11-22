import { mocked } from 'ts-jest/utils'
import { Dollar } from '../Dollar'


//jest.mock("../Dollar")
/* describe("Mocked Dollar", () => {
    let mockedDollar = mocked(Dollar, true)
    
    let product: Dollar;
    beforeAll(() => {
        mockedDollar.mockImplementation(function (this: Dollar, amount: number): Dollar {
            const self = this
            return {
                amount: amount,
                times: jest.fn(),
                test: jest.fn()
            }
        }) // spy
    })
    
    
    beforeEach(() => {
        mockedDollar.mockClear()
    
    })
    
    test("multiplication", () => {
        const five: Dollar = new Dollar(10);
        expect(mockedDollar).toBeCalledWith(10);
    
        product = five.times(2)
        expect(mockedDollar).toHaveBeenCalledTimes(1);
    })
    test("instance", () => {
        const ten = new Dollar(10)
        expect(ten.amount).toBe(10);
    })
    
    test("side effect", () => {
        const twelve = new Dollar(12)
        expect(twelve.amount).toEqual(12)
        const mockTest = jest.spyOn(twelve, 'test')
        mockTest.mockImplementation(function (this: Dollar): void { this.amount = 0 })
        twelve.test()
        expect(twelve.amount).toEqual(0)
        expect(twelve).toHaveProperty("amount");
    
        
    
    })
    test("times", () => {
        const one = new Dollar(1)
    
        const mockTimes = jest.spyOn(one, 'times')
        mockTimes.mockImplementation(function (this: Dollar, multiplier : number): Dollar { 
            return new Dollar(this.amount * multiplier)
         })
         product = one.times(5)
         expect(product.amount).toEqual(5)
    })
    
    test("basics", () => {
        mockedDollar.mockRestore()
        const ten = new Dollar(10)
        expect(ten).toBeInstanceOf(Dollar);
        expect(mockedDollar).toBeCalledTimes(1);
    })
})
 */

describe("original Dollar", () => {
    let product : Dollar
    it("should",()=>{
       /*  const one : Dollar  = new Dollar(1)
        const mocktest = jest.spyOn(one, 'test')
        mocktest.mockImplementation(function(this : Dollar) {  this.amount = 0})

        product = one
        product = one.times(1)
    
        expect(product.amount).toBe(1)

        product.test()
        expect(product.amount).toBe(0)

        const mockTimes = jest.spyOn(one, 'times')
        mockTimes.mockImplementation((): Dollar =>{ 
            return new Dollar(5* 5)
        })
        
     
        expect(one.amount).toBe(1)
        product = one.times(5)
        expect(product.amount).toBe(25)
        expect(mockTimes).toReturnTimes(1)
        expect(one.times(5)).toBeInstanceOf(Dollar)
        expect(product).toBeInstanceOf(Dollar)
        const test = new Dollar(0)
        expect(test).not.toMatchObject(product) */

    })
})


export { }