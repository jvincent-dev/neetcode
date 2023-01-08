import { threeSum } from "../../TwoPointers/threeSum";

const tests = [
    {
        input: [-1, 0, 1, 2, -1, -4],
        result: [
            [-1, -1, 2],
            [-1, 0, 1]
        ]
    },
    {
        input: [0, 1, 1],
        result: []
    },
    {
        input: [0, 0, 0],
        result: [[0, 0, 0]]
    },
    {
        input: [0, 0, 0, 0],
        result: [[0, 0, 0]]
    },
    {
        input: [-2, 0, 0, 2, 2],
        result: [[-2, 0, 2]]
    },
    {
        input: [-1, 0, 1, 2, -1, -4],
        result: [
            [-1, -1, 2],
            [-1, 0, 1]
        ]
    },
    {
        input: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
        result: [
            [-4, 0, 4],
            [-4, 1, 3],
            [-3, -1, 4],
            [-3, 0, 3],
            [-3, 1, 2],
            [-2, -1, 3],
            [-2, 0, 2],
            [-1, -1, 2],
            [-1, 0, 1]
        ]
    }
];

tests.forEach(({ input, result }) => {
    test(`threeSum ${input}:`, () => {
        const soln = threeSum(input);

        expect(soln).toEqual(result);
    }); // TODO: handle accepting different orders
});
