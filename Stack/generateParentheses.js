/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

/**
 * @param {number} n
 * @param {number | undefined} openCount
 * @param {number | undefined} closeCount
 * @param {string | undefined} currStr
 * @param {string[] | undefined} result
 * @returns {string[]}
 */

export function generateParenthesis(n, openCount = 0, closeCount = 0, currStr = "", result = []) {
    if (n * 2 === currStr.length) {
        return result.push(currStr);
    }

    if (openCount < n) {
        generateParenthesis(n, openCount + 1, closeCount, currStr + "(", result);
    }

    if (closeCount < openCount) {
        generateParenthesis(n, openCount, closeCount + 1, currStr + ")", result);
    }

    return result;

    /**
     * track current open and close counts, the current string and the result
     * add open while open count < n
     * add close while close count < open count
     * repeat
     * if currStr len === n * 2: add currStr to result
     * return result
     */
} // time: O(n), space: O(n)
