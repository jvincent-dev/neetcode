/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the
 * two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 */

/** given an array find the max sa. Where N is height.length, time: O(N^2), space: O(1)
 * @param {number[]} height
 * @returns {number}
 */

export function containerWithMostWater(height = []) {
    // given int arr of len n > return the two lines (height[i]) that
    // fill most water's SA (w * h or i (tail - head. ex: 8-1=7) * height[i])
    // init two pointer (head and tail) > solve sa > init max tracker > repeat solving sa while updating max
    // ex: 1,8,6,2,5,4,8,3,7
    // Math.min(headVal, tailVal) * (tail - head)
    // 1 * (8 - 0) = 8
    // min(8, 7) * (8 - 1) = 7 * 7 = 49
    let mostWater = Math.min(height[0], height[height.length - 1]) * (height.length - 1);

    for (let i = 0; i < height.length; i++) {
        for (let j = height.length - 1; j > i; j--) {
            const sa = Math.min(height[i], height[j]) * (j - i);

            mostWater = Math.max(mostWater, sa);
        }
    }

    return mostWater;
} // 38 min (I tried to come up with an efficient soln before this)

/** given an array find the max sa. Where N is height.length, time: O(N), space: O(1)
 * @param {number[]} height
 * @returns {number}
 */

export function containerWithMostWaterOptimized(height = []) {
    // just keep track of the max height value and calculate
    let mostWater = Math.min(height[0], height[height.length - 1]) * (height.length - 1);
    let head = 0;
    let tail = height.length - 1;

    while (head < tail) {
        // loop through heights > move the smaller height
        const headVal = height[head];
        const tailVal = height[tail];
        const sa = Math.min(headVal, tailVal) * (tail - head);

        mostWater = Math.max(mostWater, sa);

        if (headVal < tailVal) {
            head++;
        } else {
            tail--;
        }
    }

    return mostWater;
} // without stopping timer from previous solution: 46 min. )':
