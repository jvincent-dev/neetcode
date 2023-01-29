import { longestRepeatingCharacterReplacement } from "../../SlidingWindow/longestRepeatingCharacterReplacement";

const tests = [
    {
        inputA: "ABAB",
        inputB: 2,
        result: 4
    },
    {
        inputA: "AABABBA",
        inputB: 1,
        result: 4
    },
    {
        inputA: "ABBB",
        inputB: 2,
        result: 4
    },
    {
        inputA: "QPERNFSSSRDEQ",
        inputB: 4,
        result: 7
    },
    {
        inputA: "BAAAB",
        inputB: 2,
        result: 5
    },
    {
        inputA: "JSDSSMESSTR",
        inputB: 2,
        result: 6
    }
];

tests.forEach(({ inputA, inputB, result }) => {
    test(`longestRepeatingCharacterReplacement ${inputA} ${inputB}:`, () => {
        const soln = longestRepeatingCharacterReplacement(inputA, inputB);

        expect(soln).toBe(result);
    });
});
