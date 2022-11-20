import {
    productOfArrayExceptSelf,
    productOfArrayExceptSelfOptimized
} from "../ArraysAndHashing/productOfArrayExceptSelf";

const tests = [
    {
        input: [1, 2, 3, 4],
        result: [24, 12, 8, 6]
    },
    {
        input: [-1, 1, 0, -3, 3],
        result: [0, 0, 9, 0, 0]
    }
];

tests.forEach(({ input, result }) => {
    test(`productOfArrayExceptSelf: ${input}`, () => {
        const soln = productOfArrayExceptSelf(input);

        expect(soln).toEqual(result);
    });

    test(`productOfArrayExceptSelfOptimized: ${input}`, () => {
        const soln = productOfArrayExceptSelfOptimized(input);

        expect(soln).toEqual(result);
    });
});
