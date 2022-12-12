import { topKFrequentElementsMap, topKFrequentElementsReverseMap } from "../../ArraysAndHashing/topKFrequentElements";

const tests = [
    {
        input1: [1, 1, 1, 2, 2, 3],
        input2: 2,
        result: [1, 2]
    },
    {
        input1: [1],
        input2: 1,
        result: [1]
    },
    {
        input1: [4, 3, 5, 7, 2, 6, 1, 7, 6],
        input2: 2,
        result: [6, 7]
    }
];

tests.forEach(({ input1, input2, result }) => {
    test(`topKFrequentElementsMap: ${input1}, ${input2}`, () => {
        const soln = topKFrequentElementsMap(input1, input2);
        const isPass = result.every((num) => soln.includes(num));

        expect(isPass).toBe(true);
    });

    test(`topKFrequentElementsReverseMap: ${input1}, ${input2}`, () => {
        const soln = topKFrequentElementsReverseMap(input1, input2);
        const isPass = result.every((num) => soln.includes(num));

        expect(isPass).toBe(true);
    });
});
