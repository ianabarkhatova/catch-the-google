export class Game {
    #status = 'PENDING'
    #settings = {
        gridSize: {
            rowsCount: 3,
            columnsCount: 3
        },
        jumpInterval: 1000
    }

    #numberUtil;
    #googlePosition

    // dependency injection
    constructor(numberUtil) {
        this.#numberUtil = numberUtil
    }

    start() {
        this.#status = 'IN-PROGRESS'
        this.#googlePosition = {
            x: this.#numberUtil.getRandomIntegerNumber(0, this.#settings.gridSize.columnsCount - 1),
            y: this.#numberUtil.getRandomIntegerNumber(0, this.#settings.gridSize.rowsCount - 1)
        }

        setTimeout(() => {
            this.#status = 'LOSE'
        }, 3000)
    }

    async setSettings(settings) {
        this.#settings = settings
    }

    // getter
    async getStatus() {
        return this.#status
    }

    async getGooglePosition() {
        return this.#googlePosition
    }
}
