import {Game} from "./game";
import {NumberUtil} from "./number-utility";


describe("Game", () => {
    let game

    beforeEach(async()=> {
        const numberUtil = new NumberUtil()
        game = new Game(numberUtil);
    })

    it("should return Pending status as initial", async () => {
        let status = await game.getStatus()
        expect(status).toBe("PENDING")
    })

    it("should return In-progress status after start", async () => {
        await game.start()
        let status = await game.getStatus()
        expect(status).toBe("IN-PROGRESS")
    })

    it("should lose after 3 seconds", async () => {
        await game.start()
        await delay(3000)
        let status = await game.getStatus()
        expect(status).toBe("LOSE")
    })

    it("google should have correct random positions", async () => {
        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 4
            }
        })

        await game.start()
        let googlePosition = await game.getGooglePosition()
        expect(googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(googlePosition.x).toBeLessThanOrEqual(3)

        expect(googlePosition.y).toBeGreaterThanOrEqual(0)
        expect(googlePosition.y).toBeLessThanOrEqual(2)
    })



})

const delay = ms => new Promise(res => setTimeout(res, ms))



