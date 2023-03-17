import { dailyTemperatures, dailyTemperaturesOptimized } from "../../Stack/dailyTemperatures";

const tests = [
    {
        input: [73, 74, 75, 71, 69, 72, 76, 73],
        result: [1, 1, 4, 2, 1, 1, 0, 0]
    },
    {
        input: [30, 40, 50, 60],
        result: [1, 1, 1, 0]
    },
    {
        input: [30, 60, 90],
        result: [1, 1, 0]
    },
    {
        input: [55, 54, 53, 52],
        result: [0, 0, 0, 0]
    }
];

tests.forEach(({ input, result }) => {
    test(`dailyTemperatures ${input}:`, () => {
        const soln = dailyTemperatures(input);

        expect(soln).toEqual(result);
    });

    test(`dailyTemperaturesOptimized ${input}:`, () => {
        const soln = dailyTemperaturesOptimized(input);

        expect(soln).toEqual(result);
    });
});
