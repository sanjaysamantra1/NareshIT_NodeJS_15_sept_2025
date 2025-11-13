const { sumOfDigits } = require("../../math_util")

describe('This is test suite for math utils', () => {
    it('should verify sumOfDigits function', () => {
        expect(sumOfDigits(125)).toBe(8);
        expect(sumOfDigits(123)).toBe(6);
    })
})