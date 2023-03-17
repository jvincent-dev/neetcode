/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that
 * answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is
 * no future day for which this is possible, keep answer[i] == 0 instead.
 */

/**
 * @param {number[]} temperatures 
 * @returns {number[]}
 */

export function dailyTemperatures(temperatures = []) {
    return temperatures.reduce((result, temp1, index) => {
        for (let i = index + 1; i < temperatures.length; i++) {
            const temp2 = temperatures[i];

            if (temp1 < temp2) {
                result[index] = i - index;
                break;
            }
        }

        return result;
    }, new Array(temperatures.length).fill(0));
} // time: O(n^2), space: O(n)

/**
 * @param {number[]} temperatures 
 * @returns {number[]}
 */

export function dailyTemperaturesOptimized(temperatures = []) {
    const answers = new Array(temperatures.length).fill(0);
    const stack = [];

    temperatures.forEach((temp, index) => {
        if (index !== 0) {
            let lastSmallestIndex = stack[stack.length - 1];

            while (stack.length > 0 && temperatures[lastSmallestIndex] < temp) {
                stack.pop();
                answers[lastSmallestIndex] = index - lastSmallestIndex;
                lastSmallestIndex = stack[stack.length - 1];
            }
        }

        stack.push(index);
    });

    return answers;
} // time: O(2n) = O(n), space: O(n)
