import { twoSum } from "../ArraysAndHashing/twoSum";

const tests = [
    {
        input1: [2, 7, 11, 15],
        input2: 9,
        result: [0, 1]
    },
    {
        input1: [3, 2, 4],
        input2: 6,
        result: [1, 2]
    },
    {
        input1: [3, 3],
        input2: 6,
        result: [0, 1]
    }
];

tests.forEach(({ input1, input2, result }) => {
    test(`twoSum: ${input1}, ${input2}`, () => {
        const soln = twoSum(input1, input2);

        expect(soln).toEqual(result);
    });
});
