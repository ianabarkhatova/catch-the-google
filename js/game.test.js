import {Game} from "./game";
import {NumberUtil} from "./number-utility";


describe("Game", () => {
    let game

    function createGame() {
        const numberUtil = new NumberUtil()
        game = new Game(numberUtil);
    }

    beforeEach(async () => {
        createGame()
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

    // it("should lose after 3 seconds", async () => {
    //     await game.start()
    //     await delay(3000)
    //     let status = await game.getStatus()
    //     expect(status).toBe("LOSE")
    // })

    it("google should have correct random positions after start", async () => {
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

    // it("google should have correct random positions after jump interval", async () => {
    //     for (let i = 0; i < 10; i++) {
    //         createGame()
    //         await game.setSettings({
    //             gridSize: {
    //                 rowsCount: 1,
    //                 columnsCount: 4
    //             },
    //             jumpInterval: 10
    //         })
    //
    //         await game.start()
    //         let googlePosition = await game.getGooglePosition()
    //         await delay(20)
    //         let googlePosition2 = await game.getGooglePosition()
    //         expect(googlePosition).not.toEqual(googlePosition2)
    //     }
    //
    // })
})

const delay = ms => new Promise(res => setTimeout(res, ms))



