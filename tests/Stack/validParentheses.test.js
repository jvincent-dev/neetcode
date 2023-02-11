import { validParentheses } from "../../Stack/validParentheses";

const tests = [
    {
        input: "()",
        result: true
    },
    {
        input: "()[]{}",
        result: true
    },
    {
        input: "([()()({})])",
        result: true
    },
    {
        input: "(]",
        result: false
    },
    {
        input: "))",
        result: false
    },
    {
        input: "((",
        result: false
    },
    {
        input: "([()()({)]})",
        result: false
    }
];

tests.forEach(({ input, result }) => {
    test(`validParentheses ${input}:`, () => {
        const soln = validParentheses(input);

        expect(soln).toBe(result);
    });
});
