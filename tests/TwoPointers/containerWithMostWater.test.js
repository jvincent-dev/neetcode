import { containerWithMostWater, containerWithMostWaterOptimized } from "../../TwoPointers/containerWithMostWater";

const tests = [
    {
        input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
        result: 49
    },
    {
        input: [1, 1],
        result: 1
    },
    {
        input: [4,3,2,1,4],
        result: 16
    }
]; // input.length must be >= 2

tests.forEach(({ input, result }) => {
    test(`containerWithMostWater ${input}:`, () => {
        const soln = containerWithMostWater(input);

        expect(soln).toBe(result);
    });

    test(`containerWithMostWaterOptimized ${input}:`, () => {
        const soln = containerWithMostWaterOptimized(input);

        expect(soln).toBe(result);
    });
});
