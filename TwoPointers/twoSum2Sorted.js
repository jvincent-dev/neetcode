/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * Your solution must use only constant extra space.
 */

/** takes in an array of numbers and a target number. Then returns the indices + 1 that adds up to the target. Where N is numbers.length, time: O(N), space: O(1)
 * @param {number[]} numbers
 * @param {number} target
 */

export function twoSum2Sorted(numbers, target) {
    // given: "1 indexed" SORTED int arr and target num
    // returns: indices of two numbers that add up to target plus 1
    let head = 0;
    let tail = numbers.length - 1;

    while (head < tail) {
        // handle conditions
        const sum = numbers[head] + numbers[tail];

        if (sum > target) {
            tail--;
        } else if (sum < target) {
            head++;
        } else {
            return [head + 1, tail + 1];
        }
    }

    throw Error("No Solution");

    /**
        plan:
         - start with head on 0 and tail on arr.length - 1
         - add head and tail values
         - if sum > target: reduce tail; else if sum < target: increase head; else return solution

        cases: target is 9
         - next to each other [2,7]
         - next to each other in middle [1,2,7,15]
         - head should be at start tail is at end [2,3,5,7]
         - head is in middle tail is at end [1,2,5,7]
         - head is at start tail is at middle [2,5,7,8,10]
     */
}
