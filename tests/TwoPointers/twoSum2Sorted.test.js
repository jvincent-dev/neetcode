import { twoSum2Sorted } from "../../TwoPointers/twoSum2Sorted";

const tests = [
    {
        inputA: [2, 7, 11, 15],
        inputB: 9,
        result: [1, 2]
    },
    {
        inputA: [2, 3, 4],
        inputB: 6,
        result: [1, 3]
    },
    {
        inputA: [-1, 0],
        inputB: -1,
        result: [1, 2]
    },
    {
        inputA: [2, 7],
        inputB: 9,
        result: [1, 2]
    },
    {
        inputA: [1, 2, 7, 15],
        inputB: 9,
        result: [2, 3]
    },
    {
        inputA: [1, 2, 5, 7],
        inputB: 9,
        result: [2, 4]
    },
    {
        inputA: [2, 5, 7, 8, 10],
        inputB: 9,
        result: [1, 3]
    }
];

tests.forEach(({ inputA, inputB, result }) => {
    test(`twoSum2Sorted:`, () => {
        const soln = twoSum2Sorted(inputA, inputB);

        expect(soln).toEqual(result);
    });
});
