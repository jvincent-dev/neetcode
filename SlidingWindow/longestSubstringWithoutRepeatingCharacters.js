/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/** Where N is s.length, time: O(2N) = O(N) ???, space: O(N)
 * @param {string} s
 * @returns {number}
 */

export function longestSubstringWithoutRepeatingCharacters(s = "") {
    // loop through s > for each char: add to map with char as key and index as value > if already in
    // map: start over at the existing position > repeat till end

    const map = new Map();
    let longestLength = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map.has(char)) {
            // get existing char's index > set i = existingCharIndex > clear map > continue;
            const existingCharIndex = map.get(char);

            i = existingCharIndex; // remember i will increment after this iteration
            longestLength = Math.max(map.size, longestLength);
            map.clear();
        } else {
            map.set(char, i);
        }
    }

    return Math.max(map.size, longestLength);
} // 22.5 mins

export function longestSubstringWithoutRepeatingCharactersOptimized(s = "") {
    const set = new Set();
    let head = 0;
    let tail = 0;
    let maxSublen = 0;

    while (tail < s.length) {
        const tailChar = s[tail];

        if (set.has(tailChar)) {
            maxSublen = Math.max(maxSublen, tail - head);

            while (s[head] !== tailChar) {
                set.delete(s[head]);
                head++;
            } // slide window to where duplicate is while removing head chars

            head++; // since we're at the dup, increment by 1
        } else {
            set.add(tailChar);
        }

        tail++;
    }

    return Math.max(maxSublen, tail - head);
}
