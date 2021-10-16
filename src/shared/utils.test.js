const utils = require("./utils")
// @ponicode
describe("utils.BeforeDay", () => {
    test("0", () => {
        let callFunction = () => {
            utils.BeforeDay({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.BeforeDay({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.BeforeDay({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.BeforeDay(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
