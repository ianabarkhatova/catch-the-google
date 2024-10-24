import {Position} from "./position";


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

    async setSettings(settings) {
        this.#settings = settings
    }

    async #jumpGoogle() {
        // create new positions
        const newPosition = new Position(
            await this.#numberUtil.getRandomIntegerNumber(0, this.#settings.gridSize.columnsCount - 1),
            await this.#numberUtil.getRandomIntegerNumber(0, this.#settings.gridSize.rowsCount - 1)
        )
        // check if new position is not equal to existing position
        // recursion
        if (!!this.#googlePosition && newPosition.isEqual(this.#googlePosition)) {
            return this.#jumpGoogle()
        }

        this.#googlePosition = newPosition
    }

    async #runGoogleJumpInterval() {
        setInterval(async () => {
            await this.#jumpGoogle()
        }, this.#settings.jumpInterval)
    }

    async start() {
        this.#status = 'IN-PROGRESS'
        await this.#jumpGoogle()
        await this.#runGoogleJumpInterval()
    }


    // getter
    async getStatus() {
        return this.#status
    }

    async getGooglePosition() {
        return this.#googlePosition
    }
}
