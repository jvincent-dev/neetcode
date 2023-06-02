import { evalRPN } from "../../Stack/evaluateReversePolishNotation";

const tests = [
    {
        input: ["2", "1", "+", "3", "*"],
        result: 9
    },
    {
        input: ["4", "13", "5", "/", "+"],
        result: 6
    },
    {
        input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
        result: 22
    }
];

tests.forEach(({ input, result }) => {
    test(`evaluateReversePolishNotation ${input}:`, () => {
        const soln = evalRPN(input);

        expect(soln).toEqual(result);
    });
});
