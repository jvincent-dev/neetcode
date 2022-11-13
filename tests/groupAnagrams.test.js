import { groupAnagramsSort, groupAnagramsCount } from "../ArraysAndHashing/groupAnagrams";

const tests = [
    {
        input: ["eat", "tea", "tan", "ate", "nat", "bat"],
        result: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
    },
    {
        input: [""],
        result: [[""]]
    },
    {
        input: ["a"],
        result: [["a"]]
    }
];

tests.forEach(({ input, result }) => {
    test(`groupAnagramsSort`, () => {
        const soln = groupAnagramsSort(input);

        soln.forEach(anagramGroup => anagramGroup.sort());
        result.forEach(anagramGroup => anagramGroup.sort());

        const resultContainsSoln = result.every(resultGroup => {
            for (let i = 0; i < soln.length; i++) {
                const solnGroup = soln[i];
                const areArraysEqual = solnGroup.every((solnAnagram, index) => {
                    return solnAnagram === resultGroup[index];
                });

                if (areArraysEqual) {
                    return true;
                }
            }

            return false;
        });

        expect(resultContainsSoln).toBe(true);
    });

    test(`groupAnagramsCount`, () => {
        const soln = groupAnagramsCount(input);

        soln.forEach(anagramGroup => anagramGroup.sort());
        result.forEach(anagramGroup => anagramGroup.sort());

        const resultContainsSoln = result.every(resultGroup => {
            for (let i = 0; i < soln.length; i++) {
                const solnGroup = soln[i];
                const areArraysEqual = solnGroup.every((solnAnagram, index) => {
                    return solnAnagram === resultGroup[index];
                });

                if (areArraysEqual) {
                    return true;
                }
            }

            return false;
        });

        expect(resultContainsSoln).toBe(true);
    });
});