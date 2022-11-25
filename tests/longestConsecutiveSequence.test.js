import { longestConsecutiveSequence, longestConsecutiveSequenceBucket } from "../ArraysAndHashing/longestConsecutiveSequence";

const tests = [
    {
        input: [100, 4, 200, 1, 3, 2],
        result: 4
    },
    {
        input: [0, 3, 7, 2, 5, 8, 4, 6, 1, 0],
        result: 9
    },
    {
        input: [],
        result: 0
    },
    {
        input: [25, 0, 76, -1, 69, 2, 10, -2, 19, 1, -3],
        result: 6
    },
    {
        input: [99999, 0, -1, 1],
        result: 3
    }
];

tests.forEach(({ input, result }) => {
    test(`longestConsecutiveSequence: ${input}`, () => {
        const soln = longestConsecutiveSequence(input);

        expect(soln).toBe(result);
    });

    test(`longestConsecutiveSequenceBucket: ${input}`, () => {
        const soln = longestConsecutiveSequenceBucket(input);

        expect(soln).toBe(result);
    });
});
