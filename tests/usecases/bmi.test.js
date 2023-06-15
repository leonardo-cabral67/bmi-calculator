const calculateBmi = require("../../src/usecases/bmi")

describe("bmi usecase functions", () => {
    test("bmi of height 150 and weight 25 should be 11.11", () => {
        const height = 1.5
        const weight = 25
        
        const resultBmi = calculateBmi(weight, height) 
        const expectedResult = 11.11
        expect(resultBmi).toBe(expectedResult)
    })
})
