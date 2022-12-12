import { containsDuplicateSort, containsDuplicateSet } from "../../ArraysAndHashing/containsDuplicate";

const tests = [
    {
        input: [1, 2, 3, 1],
        result: true
    },
    {
        input: [1, 2, 3, 4],
        result: false
    },
    {
        input: [1, 1, 1, 1, 1],
        result: true
    },
    {
        input: [1],
        result: false
    },
    {
        input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
        result: true
    }
];

tests.forEach(({ input, result }) => {
    test(`containsDuplicateSort`, () => {
        const soln = containsDuplicateSort(input);

        expect(soln).toBe(result);
    });

    test(`containsDuplicateSet`, () => {
        const soln = containsDuplicateSet(input);

        expect(soln).toBe(result);
    });
});