// 3. Longest Substring Without Repeating Characters
// Medium
// Topics
// Companies
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charIndexMap[char] !== undefined) {
      start = Math.max(start, charIndexMap[char] + 1);
    }

    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

// Runtime 91ms (Beats 37.02%)
// Memory 48.38MB (Beats 40.83%)
