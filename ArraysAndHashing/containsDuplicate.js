/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */


/** where n = nums.length. time: O(nlogn), space: O(1)
 * @param {Array<number>}
 * @returns {boolean}
 */

export function containsDuplicateSort(nums) {
    nums.sort();

    return nums.some((num, index) => {
        if (index === 0) {
            return false;
        }

        return nums[index - 1] === num;
    });
}

/** where n = nums.length. time: O(n), space: O(n)
 * @param {Array<number>} nums 
 * @returns {boolean}
 */

export function containsDuplicateSet(nums) {
    const setNums = new Set();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (setNums.has(num)) {
            return true;
        }

        setNums.add(num);
    }

    return false;
}