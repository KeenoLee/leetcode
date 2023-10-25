// 5. Longest Palindromic Substring
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  // Create a 2D array to store whether a substring is a palindrome
  const dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));

  // All substrings of length 1 are palindromes
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  // Check for palindromes of length 2
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for palindromes of length greater than 2
  for (let len = 3; len <= s.length; len++) {
    for (let i = 0; i < s.length - len + 1; i++) {
      const j = i + len - 1; // Ending index of the current substring

      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          start = i;
          maxLength = len;
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
};

// Runtime 375ms (Beats 27.40%)
// Memory 86.97 MB (Beats 10.13%)
