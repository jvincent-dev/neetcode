import { bestTimeToBuyAndSellStock } from "../../SlidingWindow/bestTimeToBuyAndSellStock";

const tests = [
    {
        input: [7, 1, 5, 3, 6, 4],
        result: 5
    },
    {
        input: [7, 6, 4, 3, 1],
        result: 0
    },
    {
        input: [5, 5, 5],
        result: 0
    },
    {
        input: [5, 5, 3, 5],
        result: 2
    },
    {
        input: [9, 8, 5, 16],
        result: 11
    },
    {
        input: [5, 5, 6, 7],
        result: 2
    }
];

tests.forEach(({ input, result }) => {
    test(`bestTimeToBuyAndSellStock ${input}:`, () => {
        const soln = bestTimeToBuyAndSellStock(input);

        expect(soln).toBe(result);
    });
});
