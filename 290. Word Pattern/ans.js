// 290. Word Pattern
// Solved
// Easy
// Topics
// Companies
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

// https://leetcode.com/problems/word-pattern/description/÷

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (patternToWord.has(char)) {
      if (patternToWord.get(char) !== word) {
        return false;
      }
    } else {
      patternToWord.set(char, word);
    }

    if (wordToPattern.has(word)) {
      if (wordToPattern.get(word) !== char) {
        return false;
      }
    } else {
      wordToPattern.set(word, char);
    }
  }

  return true;
};

// Runtime 44ms (Beats 89.14%)
// Memory 41.42MB (Beats 88.27%)
