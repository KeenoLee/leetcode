// 318. Maximum Product of Word Lengths
// Solved
// Medium
// Topics
// Companies
// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

// Example 1:

// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:

// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
// Example 3:

// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.

// Constraints:

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

// https://leetcode.com/problems/maximum-product-of-word-lengths/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const n = words.length;
  const wordBits = new Array(n).fill(0);
  const wordLengths = new Array(n).fill(0);

  // Calculate the bitmask and word lengths for each word
  for (let i = 0; i < n; i++) {
    for (const char of words[i]) {
      wordBits[i] |= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
    }
    wordLengths[i] = words[i].length;
  }

  let maxProduct = 0;

  // Iterate through all pairs of words
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Check if the words share no common letters
      if ((wordBits[i] & wordBits[j]) === 0) {
        maxProduct = Math.max(maxProduct, wordLengths[i] * wordLengths[j]);
      }
    }
  }

  return maxProduct;
};

// Runtime 84ms (Beats 76.42%)
// Memory 46.99MB (Beats 49.06%)
