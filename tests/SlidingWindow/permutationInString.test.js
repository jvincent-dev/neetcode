import { permutationString, permutationStringOptimized } from "../../SlidingWindow/permutationInString";

const tests = [
    {
        inputA: "ab",
        inputB: "eidbaooo",
        result: true
    },
    {
        inputA: "ab",
        inputB: "eidboaoo",
        result: false
    },
    {
        inputA: "qff",
        inputB: "ifisnoskikfqzrmzlv",
        result: false
    },
    {
        inputA: "rvwrk",
        inputB: "lznomzggwrvrkxecjaq",
        result: true
    },
    {
        inputA: "adc",
        inputB: "dcda",
        result: true
    }
]; // input.length must be >= 2

tests.forEach(({ inputA, inputB, result }) => {
    test(`permutationString ${inputA} ${inputB}:`, () => {
        const soln = permutationString(inputA, inputB);

        expect(soln).toBe(result);
    });

    test(`permutationStringOptimized ${inputA} ${inputB}:`, () => {
        const soln = permutationStringOptimized(inputA, inputB);

        expect(soln).toBe(result);
    });
});
