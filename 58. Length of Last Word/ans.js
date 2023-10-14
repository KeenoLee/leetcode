// 58. Length of Last Word
// Easy
// Topics
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Trim trailing spaces
  s = s.trim();

  let length = 0;

  // Iterate from right to left to count characters of the last word
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      break; // Encountered a space, so the last word has ended.
    }
    length++;
  }

  return length;
};

//Runtime 50ms (Beats 62.46%)
//Memory 41.88MB (Beats 58.34%)
