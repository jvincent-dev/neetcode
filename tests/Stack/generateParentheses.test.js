import { generateParenthesis } from "../../Stack/generateParentheses";

const tests = [
    {
        input: 3,
        result: ["((()))", "(()())", "(())()", "()(())", "()()()"]
    },
    {
        input: 1,
        result: ["()"]
    }
];

tests.forEach(({ input, result }) => {
    test(`generateParenthesis ${input}:`, () => {
        const soln = generateParenthesis(input);

        expect(soln).toEqual(result);
    });
});
