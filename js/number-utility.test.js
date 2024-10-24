import {NumberUtil} from "./number-utility";

describe('NumberUtil', () => {

    let numberUtilInstance;

    beforeEach(() => {
        numberUtilInstance = new NumberUtil();
    });

    describe('getRandomIntegerNumber', () => {
        it('should return a number within the specified range', () => {
            for (let i = 0; i < 100; i++) {
                const fromInclusive = 1;
                const toExclusive = 3;
                const result = numberUtilInstance.getRandomIntegerNumber(fromInclusive, toExclusive);
                expect(result).toBeGreaterThanOrEqual(fromInclusive);
                expect(result).toBeLessThan(toExclusive);
            }
        });

        it('should return an integer', () => {
            const result = numberUtilInstance.getRandomIntegerNumber(1, 10);
            expect(Number.isInteger(result)).toBe(true);
        });

        it('should handle negative ranges correctly', () => {
            const result = numberUtilInstance.getRandomIntegerNumber(-10, -5);
            expect(result).toBeGreaterThanOrEqual(-10);
            expect(result).toBeLessThan(-5);
        });

        it('should return the same number when fromInclusive is equal to toExclusive - 1', () => {
            const result = numberUtilInstance.getRandomIntegerNumber(5, 6);
            expect(result).toBe(5);
        });
    });
});
