import { isValidAnagramSort, isValidAnagramCount } from "../ArraysAndHashing/validAnagram";

const tests = [
    {
        input1: "anagram",
        input2: "nagaram",
        result: true
    },
    {
        input1: "rat",
        input2: "car",
        result: false
    },
    {
        input1: "testing",
        input2: "ingtest",
        result: true
    },
    {
        input1: "not",
        input2: "anagram",
        result: false
    }
];

tests.forEach(({ input1, input2, result }) => {
    test(`isValidAnagramSort: ${input1}, ${input2}`, () => {
        const soln = isValidAnagramSort(input1, input2);

        expect(soln).toBe(result);
    });

    test(`isValidAnagramCount: ${input1}, ${input2}`, () => {
        const soln = isValidAnagramCount(input1, input2);

        expect(soln).toBe(result);
    });
});