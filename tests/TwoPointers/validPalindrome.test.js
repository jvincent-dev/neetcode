import { validPalindrome } from "../../TwoPointers/validPalindrome";

const tests = [
    {
        input: "A man, a plan, a canal: Panama",
        result: true
    },
    {
        input: "race a car",
        result: false
    },
    {
        input: " ",
        result: true
    },
    {
      input: "0P",
      result: false
    }
];

tests.forEach(({ input, result }) => {
    test(`validPalindrome ${input}:`, () => {
        const soln = validPalindrome(input);

        expect(soln).toBe(result);
    });
});
