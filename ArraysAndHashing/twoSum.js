/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

/** gets indices of numbers that sum up to the target. Where n is nums.length, time: O(n), space: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

export function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (map.hasOwnProperty(num) && map[num] !== i) {
            return [map[num], i];
        } // if complement exists with a different index: return result

        map[target - num] = i; // add index with complement's key
    }

    throw new Error("invalid input");
}
