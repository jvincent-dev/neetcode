/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

export function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const midpoint = Math.floor((start + end) / 2);

        if (target < nums[midpoint]) {
            end = midpoint - 1;
        } else if (target > nums[midpoint]) {
            start = midpoint + 1;
        } else {
            return midpoint;
        }
    }

    return -1;
} // time: O(logn), space: O(1)
