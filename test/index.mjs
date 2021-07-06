import assert from "assert"
import calculator from "../calculator.js"
describe("calculator test", () => {
    describe("Addition", () => {
        it("Adding 2+3=5", () => {
            assert.strictEqual(5, calculator.Add(2, 3));
        })
    });
    describe("Subtraction", () => {
        it("Subtracting 3-3=0", () => {
            assert.strictEqual(0, calculator.Subtract(3, 3));
        })
    })
    describe("Multiplication", () => {
        it("Multiplicating 2*3=6", () => {
            assert.strictEqual(6, calculator.Multiply(2, 3));
        })
    });
    describe("Division", () => {
        it("Dividing 6/2=3", () => {
            assert.strictEqual(3, calculator.Divide(6, 2));
        })
    });
})

