/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * 
 * Open brackets must be closed in the correct order.
 * 
 * Every close bracket has a corresponding open bracket of the same type.
 */

const openingToClosing = {
    "(": ")",
    "{": "}",
    "[": "]"
};

/** where N is s.length, time: O(n), space: O(n)
 * @param {string} s 
 * @returns {boolean}
 */

export function validParentheses(s) {
    const openings = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const isOpening = openingToClosing.hasOwnProperty(char);

        if (isOpening) {
            openings.push(char);
        } else {
            const currOpening = openings.pop();

            if (openingToClosing[currOpening] !== char) {
                return false;
            }
        }
    }

    return openings.length === 0;
} // 15 mins
