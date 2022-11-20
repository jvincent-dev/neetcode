/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

/** gets the top k frequent integers using a num to count map. Where n is nums.length, time: O(n^2), space: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */

export function topKFrequentElementsMap(nums, k) {
    // count nums > loop through num counts > get k max elements
    let maxCount = 0;
    const results = [];
    const numsCount = nums.reduce((map, num) => {
        if (map.hasOwnProperty(num)) {
            map[num]++;
        } else {
            map[num] = 1;
        }

        maxCount = Math.max(maxCount, map[num]);

        return map;
    }, {}); // O(n)

    for (let nextMaxCount = maxCount; nextMaxCount >= 0 && results.length < k; nextMaxCount--) {
        for (const [key, val] of Object.entries(numsCount)) {
            if (results.length === k) {
                break;
            } else if (val === nextMaxCount && key !== results[results.length - 1]) {
                results.push(parseInt(key));
            }
        } // O(n) where n is nums.length and all nums are distinct
    } // O(k)

    return results;
}

/** gets the top k frequent integers using a count to num map. Where n is nums.length, time: O(n), space: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function topKFrequentElementsReverseMap(nums, k) {
    const numToCount = nums.reduce((map, num) => {
        if (map.hasOwnProperty(num)) {
            map[num]++;
        } else {
            map[num] = 1;
        }

        return map;
    }, {}); // time: O(n)
    const countToNums = Object.keys(numToCount).reduce((arrMap, key) => {
        const numCount = numToCount[key];
        const arrMapNums = arrMap[numCount];

        key = parseInt(key);

        if (arrMapNums) {
            arrMapNums.push(key); // add to list
        } else {
            arrMap[numCount] = [key]; // start list
        }

        return arrMap;
    }, new Array(nums.length + 1)); // time: O(n)
    const result = [];

    for (let i = countToNums.length - 1; i >= 0; i--) {
        const numsBucket = countToNums[i];

        if (numsBucket) {
            result.push(...numsBucket);

            if (result.length === k) {
                break;
            }
        }
    } // add top k frequent elements to result. time: O(n)

    return result;
}
