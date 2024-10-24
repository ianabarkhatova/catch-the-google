export class NumberUtil {
    async getRandomIntegerNumber(fromInclusive, toExclusive) {
        return Math.floor(Math.random() * (toExclusive - fromInclusive) + fromInclusive);
    }
}

