/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/** groups anagrams through sorting strings. Where M is strs.length and N is the longest string in strs, time: O(MNlogN), space: O(M) for the result
 * @param {string[]} strs 
 * @returns {string[][]}
 */

export function groupAnagramsSort(strs = []) {
    const map = {};

    strs.forEach(str => {
        const sortedStr = str.split("").sort().join(""); // time: O(NlogN)

        if (map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str];
        }
    }); // time: O(M)

    return Object.values(map);
}

/** groups anagrams through counting chars. Where M is strs.length and N is the longest string in strs, time: O(MN), space: O(M) for the result
 * @param {string[]} strs 
 * @returns {string[][]}
 */

export function groupAnagramsCount(strs = []) {
    // loop through strs > count chars in str > create key using the counts > add to map
    const map = {};
    const aCharCode = "a".charCodeAt(0);
    
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const counter = new Array(27).fill(0); // time: O(1), space: O(1)

        // count chars
        for (let charIndex = 0; charIndex < str.length; charIndex++) {
            const charCode = str.charCodeAt(charIndex);

            counter[charCode - aCharCode]++;
        } // time: O(str.length), space: O(1)

        let key = [];

        // make the key
        for (let charCode = 0; charCode < counter.length; charCode++) {
            const charCount = counter[charCode];
            const char = String.fromCharCode(aCharCode + charCode);

            if (charCount > 0) {
                key.push(char);
                key.push("" + charCount);
            }
        } // time: O(1), space: O(1)

        key = key.join(""); // time: O(1)

        if (map.hasOwnProperty(key)) {
            map[key].push(str);
        } else {
            map[key] = [str];
        }
    } // O(strs.length)

    return Object.values(map); // time: O(strs.length), space: O(strs.length)
}