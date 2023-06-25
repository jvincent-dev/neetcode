import { searchA2dMatrix, searchA2dMatrixSimple } from "../../BinarySearch/searchA2DMatrix";

const tests = [
    {
        inputA: [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60]
        ],
        inputB: 3,
        result: true
    },
    {
        inputA: [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
            [61, 62, 63, 64]
        ],
        inputB: 60,
        result: true
    },
    {
        inputA: [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60]
        ],
        inputB: 13,
        result: false
    }
];

tests.forEach(({ inputA, inputB, result }) => {
    test(`searchA2dMatrix ${inputA}, ${inputB}:`, () => {
        const soln = searchA2dMatrix(inputA, inputB);
        const solnSimple = searchA2dMatrixSimple(inputA, inputB);

        expect(soln).toEqual(result);
        expect(solnSimple).toEqual(result);
    });
});
