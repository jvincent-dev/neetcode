/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 */

/** gets the length of the longest sequence of consecutive numbers.
 * Where n is nums.length, k is the largest num, and l is the smallest negative number, time: O(k + l), space: O(k + l)
 * @param {number[]} nums
 * @return {number}
 */
export function longestConsecutiveSequenceBucket(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxNum = nums.reduce((max, num) => Math.max(num, max), nums[0]);
    let minNum = nums.reduce((min, num) => Math.min(num, min), nums[0]);
    const existingNumbers = new Array(maxNum + 1).fill(false);
    const existingNegNums = minNum >= 0 ? [] : new Array(minNum * -1 + 1);
    let longestSequence = 0;
    let seqCount = 0;

    nums.forEach((num) => {
        if (num < 0) {
            existingNegNums[num * -1] = true;
        } else {
            existingNumbers[num] = true;
        }
    });

    for (let i = existingNegNums.length - 1; i > 0; i--) {
        const hasNegNum = existingNegNums[i];

        if (hasNegNum) {
            seqCount++;
        } else {
            if (longestSequence < seqCount) {
                longestSequence = seqCount;
            }

            seqCount = 0;
        }
    }

    existingNumbers.forEach((hasNum) => {
        if (hasNum) {
            seqCount++;
        } else {
            if (longestSequence < seqCount) {
                longestSequence = seqCount;
            }

            seqCount = 0;
        }
    });

    return Math.max(longestSequence, seqCount);
} // forgot to handle: len 0, neg nums. This solution is slow though

/** gets the length of the longest sequence of consecutive numbers. Where n is nums.length, time: O(n), space: O(n)
 * @param {number[]} nums
 * @returns {number}
 */

export function longestConsecutiveSequence(nums) {
    // create a set > loop through nums: check if start of seq > if start of seq: start seq count and record max
    let seqCount = 0;
    let maxSeq = 0;
    const numsSet = new Set();

    nums.forEach((num) => {
        numsSet.add(num);
    });

    nums.forEach((num) => {
        const isEndOfSeq = !numsSet.has(num + 1);

        if (isEndOfSeq) {
            seqCount = 1; // init count

            // start counting
            for (let nextNum = num - 1; numsSet.has(nextNum); nextNum--) {
                seqCount++;
            }

            maxSeq = Math.max(maxSeq, seqCount); // update max sequence length
        }
    });

    return maxSeq;
}
