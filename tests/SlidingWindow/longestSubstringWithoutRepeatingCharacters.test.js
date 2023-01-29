import { longestSubstringWithoutRepeatingCharacters, longestSubstringWithoutRepeatingCharactersOptimized } from "../../SlidingWindow/longestSubstringWithoutRepeatingCharacters";

const tests = [
    {
        input: "abcabcbb",
        result: 3
    },
    {
        input: "bbbbb",
        result: 1
    },
    {
        input: "pwwkew",
        result: 3
    },
    {
        input: "abcadeabc",
        result: 5
    },
    {
        input: "tmmzuxt",
        result: 5
    }
]; // input.length must be >= 2

tests.forEach(({ input, result }) => {
    test(`longestSubstringWithoutRepeatingCharacters ${input}:`, () => {
        const soln = longestSubstringWithoutRepeatingCharacters(input);

        expect(soln).toBe(result);
    });

    test(`longestSubstringWithoutRepeatingCharactersOptimized ${input}:`, () => {
        const soln = longestSubstringWithoutRepeatingCharactersOptimized(input);

        expect(soln).toBe(result);
    });
});
