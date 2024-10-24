import {NumberUtil} from "./number-utility";

describe('NumberUtil', () => {

    let numberUtilInstance;

    beforeEach(() => {
        numberUtilInstance = new NumberUtil();
    });


    test('should return a number within the specified range', async () => {
        for (let i = 0; i < 100; i++) {
            const fromInclusive = 1;
            const toExclusive = 3;
            const result = await numberUtilInstance.getRandomIntegerNumber(fromInclusive, toExclusive);
            expect(result).toBeGreaterThanOrEqual(fromInclusive);
            expect(result).toBeLessThan(toExclusive);
        }
    });

    test('should return an integer', async () => {
        const result = await numberUtilInstance.getRandomIntegerNumber(1, 10);
        expect(Number.isInteger(result)).toBe(true);
    });

    test('should handle negative ranges correctly', async () => {
        const result = await numberUtilInstance.getRandomIntegerNumber(-10, -5);
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThan(-5);
    });

    test('should return the same number when fromInclusive is equal to toExclusive - 1', async () => {
        const result = await numberUtilInstance.getRandomIntegerNumber(5, 6);
        expect(result).toBe(5);
    });

});
