/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * 
 * In other words, return true if one of s1's permutations is the substring of s2.
 */

/** Where N is s2.length, time: O(N^2), space: O(N)
 * @param {string} s1 
 * @param {string} s2 
 * @returns 
 */

export function permutationString(s1 = "", s2 = "") {
    // init head, tail, map of char:count pairs for s1 > loop through s2 > if s2Char is in map: remove count from
    // map > if head !== tail && s2Char is not in map: add headChar to map and increment to put back used chars until
    // head === tail > if head === tail increment tail while checking remaining chars

    let head = 0;
    let tail = 0;
    let map = new Map();

    for (let i = 0; i < s1.length; i++) {
        const s1Char = s1[i];

        if (map.has(s1Char)) {
            const currCount = map.get(s1Char);

            map.set(s1Char, currCount + 1);
        } else {
            map.set(s1Char, 1);
        }
    } // create map

    while (head < s2.length && tail < s2.length) {
        const tailChar = s2[tail];

        if (map.has(tailChar)) {
            // remove char from map > if map is empty: return true
            const charCount = map.get(tailChar);

            if (charCount === 1) {
                map.delete(tailChar);

                if (map.size === 0) {
                    return true;
                } // if last char was removed
            } else {
                map.set(tailChar, charCount - 1);
            }
        } else if (head !== tail) {
            // add used chars back to map by incrementing head until head === tail
            const tempHead = head; // use tempHead to remember where to startover from

            while (head !== tail) {
                const headChar = s2[head];

                if (map.has(headChar)) {
                    const charCount = map.get(headChar);

                    map.set(headChar, charCount + 1);
                } else {
                    map.set(headChar, 1);
                }

                head++;
            }

            head = tempHead + 1; // + 1 to keep up with tail since tail will increment at the end of loop
            tail = tempHead;
        } else {
            head++;
        }

        tail++;
    }

    return map.size === 0;
} // 41 min

/** where N is s2.length, time: O(N), space: O(2*26) = O(1)
 * @param {string} s1 
 * @param {string} s2 
 * @returns {boolean}
 */

export function permutationStringOptimized(s1, s2) {
    const s1Map = new Map();
    const s2Map = new Map();
    let matchCount = 0

    for (let i = 0; i < s1.length; i++) {
        const s1Char = s1[i];

        if (s1Map.has(s1Char)) {
            const currCount = s1Map.get(s1Char);

            s1Map.set(s1Char, currCount + 1);
        } else {
            s1Map.set(s1Char, 1);
        }
    } // add all s1

    for (let i = 97; i < 123; i++) {
        const letter = String.fromCharCode(i);

        if (!s1Map.has(letter)) {
            s1Map.set(letter, 0);
            matchCount++;
        }

        s2Map.set(letter, 0);
    }

    let head = 0;
    let tail = 0;

    //    h
    // eidbaooo
    //     t
    // { a: 1, b: 1 }
    // { b: 1, a: 1 } // all 0s
    // matches: 24 > 23 > 22 > 21 > 22 > 23 > 24 > 25 > 26

    // bb
    //
    //   h
    // aabb
    //    t
    // { b: 2 }
    // { b: 2 }
    // matches: 25 > 24 > 24 > 24 > 24 > 25

    // cc
    //  h
    // abccc
    //    t
    // { c: 2 }
    // { a: 0, b: 0, c: 2 }
    // matches: 25 > 24 > 23 > 23 > 24 > 25 > 26 TRUE
    // currLen: 3 gtr 2 > 3 gtr 2 >

    while (tail < s2.length) {
        // add chars till same len as s1. > check if match is 26
        const substrLen = (tail - head) + 1;
        const headChar = s2[head];
        const tailChar = s2[tail];
        const s1CharCount = s1Map.get(tailChar);
        const s2CharCount = s2Map.get(tailChar);

        // add char count to s2Map > if eq: add match; else reduce match; Do the same when inc head > 
        s2Map.set(tailChar, s2CharCount + 1);

        // update matches
        if (s1CharCount === s2CharCount + 1) {
            matchCount++; // same count
        } else if (s1CharCount === s2CharCount) {
            matchCount--; // was same count, but not anymore
        }

        if (substrLen > s1.length) {
            // remove head char > update headCharCount
            const s1HeadCharCount = s1Map.get(headChar);
            const s2HeadCharCount = s2Map.get(headChar);

            s2Map.set(headChar, s2HeadCharCount - 1);

            if (s1HeadCharCount === s2HeadCharCount - 1) {
                matchCount++; // same count
            } else if (s1HeadCharCount === s2HeadCharCount) {
                matchCount--; // was same count, but not anymore
            }

            head++;
        }

        if (matchCount === 26) {
            return true;
        }

        tail++;
    }

    return matchCount === 26;
} // 1hr
