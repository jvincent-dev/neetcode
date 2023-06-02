import { binarySearch, binarySearchRecursive } from "../../BinarySearch/binarySearch";

const tests = [
    {
        inputA: [-1, 0, 3, 5, 9, 12],
        inputB: 9,
        result: 4
    },
    {
        inputA: [-1, 0, 3, 5, 9, 12],
        inputB: 2,
        result: -1
    },
    {
        inputA: [5],
        inputB: 5,
        result: 0
    }
];

tests.forEach(({ inputA, inputB, result }) => {
    test(`binarySearch ${inputA}, ${inputB}:`, () => {
        const soln = binarySearch(inputA, inputB);

        expect(soln).toEqual(result);
    });

    test(`binarySearchRecursive ${inputA}, ${inputB}:`, () => {
        const soln = binarySearchRecursive(inputA, inputB);

        expect(soln).toEqual(result);
    });
});
