/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
 * You can perform this operation at most k times.
 * 
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 */

/** where N is s.length, time: O(N), space: O(26) = O(1)
 * @param {string} s 
 * @param {number} k 
 * @returns {number}
 */

export function longestRepeatingCharacterReplacement(s, k) {
  if (k >= s.length - 1) {
    return s.length;
  }

  const map = new Map();
  let head = 0;
  let tail = 0;
  let maxChar = s[0];
  let maxSublen = 0;

  while (tail < s.length) {
    const tChar = s[tail];
    const newTCharCount = (map.get(tChar) || 0) + 1;
    let maxCharCount = map.get(maxChar) || 0;

    map.set(tChar, newTCharCount);

    if (maxCharCount < newTCharCount) {
      maxChar = tChar;
      maxCharCount = newTCharCount;
    }

    let replacementsUsed = ((tail - head) + 1) - maxCharCount;

    while (replacementsUsed > k) {
      const hChar = s[head];
      const newHCharCount = map.get(hChar) - 1;
      const totalCharsUsed = tail - head;

      if (newHCharCount === 0) {
        map.delete(hChar);
      } else {
        map.set(hChar, newHCharCount);
      }

      if (hChar === maxChar) {
        for (const [char, count] of map) {
          if (maxCharCount < count) {
            maxChar = char;
            maxCharCount = count;
          } // update maxChar and it's count
        } // O(26) = O(1)
      }

      maxSublen = Math.max(maxSublen, totalCharsUsed);
      replacementsUsed = totalCharsUsed - maxCharCount;
      head++;
    } // time: O(N) ???

    tail++;
  } // time: O(N + N) = O(2N) = O(N) because the inner while only is catching up with t

  return Math.max(maxSublen, tail - head);

  // map: { A: 1 }
  // k: 1
  // maxLen
  // h
  // AABABBA
  //  t
  // when to update head: totalCount - maxCharCount
  // totalCount = (tail - head)
}