export class NumberUtil {
    getRandomIntegerNumber(fromInclusive, toExclusive) {
        return Math.floor(Math.random() * (toExclusive - fromInclusive) + fromInclusive);
    }
}

