const { sumOfDigits, sum, isEven, cars, addNewCar } = require("../../math_util")

describe('This is test suite for math utils', () => {
    it('should verify sumOfDigits function', () => {
        console.log("it-1")
        expect(sumOfDigits(125)).toBe(8);
        expect(sumOfDigits(123)).toBe(6);
    })
    it('should add all the elements in an array', () => {
        console.log("it-2")
        expect(sum([10, 20, 30, 40, 50])).toBe(150);
    })
    it('should verify even/odd', () => {
        console.log("it-3")
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).not.toBe(true);
    })
    xit('should verify addnewCar', () => {
        console.log("it-4")
        expect(cars.length).toBe(2);
        expect(cars).toContain('Tata');
        expect(cars).toContain('Honda');
        expect(cars).not.toContain('Maruti');
        addNewCar('Maruti');
        expect(cars.length).toBe(3);
        expect(cars).toContain('Tata');
        expect(cars).toContain('Honda');
        expect(cars).toContain('Maruti');
        expect(cars).not.toContain('Hyundai');
        expect(cars).toEqual(['Tata', 'Honda', 'Maruti']);
    })

    beforeAll(() => {
        console.log('Before All...');
        // repetitive code, that should be executed only once
    })
    beforeEach(() => {
        console.log('Before each...')
        // repititive code before every it
    })
    afterEach(() => {
        console.log('After each...')
        // repititive code after every it
    })
    afterAll(() => {
        console.log('After all...');
        // clearing things
    })
})