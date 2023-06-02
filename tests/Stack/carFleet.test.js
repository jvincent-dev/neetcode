import carFleet from "../../Stack/carFleet";

const tests = [
    {
        inputA: 12,
        inputB: [10, 8, 0, 5, 3],
        inputC: [2, 4, 1, 1, 3],
        result: 3
    },
    {
        inputA: 10,
        inputB: [3],
        inputC: [3],
        result: 1
    },
    {
        inputA: 100,
        inputB: [0,2,4],
        inputC: [4,2,1],
        result: 1
    }
];

tests.forEach(({ inputA, inputB, inputC, result }) => {
    test(`carFleet ${inputA}, ${inputB}, ${inputC}:`, () => {
        const soln = carFleet(inputA, inputB, inputC);

        expect(soln).toEqual(result);
    });
});
