/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 */

/** takes an array of numbers and returns all unique triplets that sum to 0. Where N is nums.length, time: O(N), space: to sort O(N)
 * @param {number[]} nums
 * @returns {number[][]}
 */

export function threeSum(nums = []) {
    // sort array > for each index use two pointer to find the remaining pair of the triplet
    const result = [];

    nums.sort((a, b) => a - b); // sort() sorts numbers lexographically

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } // skip repeating numbers

        let head = i + 1;
        let tail = nums.length - 1;

        // two pointer
        while (head < tail) {
            const sum = nums[i] + nums[head] + nums[tail];

            // inc or dec the head or tail
            if (sum < 0) {
                // too small
                head++;
            } else if (sum > 0) {
                // too big
                tail--;
            } else {
                result.push([nums[i], nums[head], nums[tail]]); // add unique solution

                // skip head duplicates (tail dups will skip with the current code)
                head++;

                while (head < tail && nums[head] === nums[head - 1]) {
                    head++;
                }
            }
        }
    }

    return result;
} // 31 min
