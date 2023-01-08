/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/** takes a string and returns if palindrome after removing non alphanumeric characters. Where N is s.length, time: O(N), space: O(N)
 * @param {string} s
 * @returns {boolean}
 */

export function validPalindrome(s = "") {
    let head = 0;
    let tail = s.length - 1;

    while (head < tail) {
        const headChar = s[head].toLowerCase();
        const tailChar = s[tail].toLowerCase();

        // if [a-z]: compare tail and head > if match go to next head and next tail until they're both chars again
        if (!isLowerAlphanumeric(headChar)) {
            // not lower alphanumeric
            head++;
        } else if (!isLowerAlphanumeric(tailChar)) {
            // not lower alphanumeric
            tail--;
        } else if (headChar !== tailChar) {
            // both lower alphanumeric
            return false; // compare and check if ===; if not return false
        } else {
            // both lower alphanumeric and eq
            head++;
            tail--;
        }
    }

    return true;
} // 15.5 min

function isLowerAlphanumeric(char = "") {
    const isAlpha = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
    const isNumeric = char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;

    return isAlpha || isNumeric;
}
