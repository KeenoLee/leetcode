// 72. Edit Distance
// Medium
// Topics
// Companies
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

// https://leetcode.com/problems/edit-distance/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D array dp where dp[i][j] represents the minimum edit distance between
  // the first i characters of word1 and the first j characters of word2.
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  // Initialize the first row and first column of dp.
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill the dp array using dynamic programming.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(
            dp[i - 1][j], // Deletion
            dp[i][j - 1], // Insertion
            dp[i - 1][j - 1] // Replacement
          ) + 1;
      }
    }
  }

  // The result is in the bottom-right corner of the dp array.
  return dp[m][n];
};

// Runtime 85ms (Beats 32.49%)
// Memory 47.48MB (Beats 51.98%)
