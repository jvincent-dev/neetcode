/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/** multiplies to other values except own index. Where n is nums.length, time: O(n), space: O(n)
 * @param {number[]} nums
 * @returns {number[]}
 */

export function productOfArrayExceptSelf(nums) {
    // 1 2 3 4
    // 1 1 1 1
    // 1 1 2 6 lToR
    // 24 12 4 1 rToL
    // 24 12 8 6 lToR[i] * rToL[i]
    const lToR = nums.reduce((result, num, index) => {
        if (index === 0) {
            return result;
        }

        result[index] = nums[index - 1] * result[index - 1];

        return result;
    }, new Array(nums.length).fill(1)); // calculate lToR products
    const rToL = nums.reduce((result, num, index) => {
        const reverseIndex = nums.length - 1 - index;

        if (reverseIndex === nums.length - 1) {
            return result;
        }

        result[reverseIndex] = nums[reverseIndex + 1] * result[reverseIndex + 1];

        return result;
    }, new Array(nums.length).fill(1)); // calculate rToL products

    lToR.forEach((num, index) => {
        lToR[index] = parseInt(num * rToL[index]); // parseInt prevents -0
    }); // calculate lToR * rToL

    return lToR;
}

/** multiplies to other values except own index. Where n is nums.length, time: O(n), space: O(1) | O(n) for result
 * @param {number[]} nums
 * @returns {number[]}
 */

export function productOfArrayExceptSelfOptimized(nums) {
    let runnerResult = 1;
    const result = new Array(nums.length);

    for (let i = 0; i < result.length; i++) {
        result[i] = runnerResult;
        runnerResult *= nums[i];
    } // calculate from left to right. time: O(n)

    runnerResult = 1;

    for (let i = result.length - 1; i >= 0; i--) {
        result[i] = parseInt(result[i] * runnerResult); // parseInt prevents -0
        runnerResult *= nums[i];
    } // calculate from right to left. time: O(n)

    return result; // only result is created for space
}
