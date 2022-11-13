/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/** sorts anagrams and checks if strings are equal. Where M is s.length and N is t.length, time: O(MlogM + NlogN), space: O(M + N)
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */

export function isValidAnagramSort(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
}

/** checks if t is an anagram of s with the help of a map. Where M is s.length and N is t.length, time: O(M + N), space: O(M)
 * @param {string} s 
 * @param {string} t
 * @returns {boolean} 
 */

export function isValidAnagramCount(s, t) {
    const charCounter = {};
    
    // count chars in s > reduce count on t > if t char doesn't exist in s: return false > return charCounter.isEmpty()
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charCounter.hasOwnProperty(char)) {
            charCounter[char]++;
        } else {
            charCounter[char] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];

        if (charCounter.hasOwnProperty(char)) {
            if (charCounter[char] === 1) {
                delete charCounter[char];
            } else {
                charCounter[char]--;
            }
        } else {
            return false;
        }
    }

    return Object.keys(charCounter).length === 0;
}