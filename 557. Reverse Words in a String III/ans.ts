// 557. Reverse Words in a String III
// Easy
// Topics
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

// https://leetcode.com/problems/reverse-words-in-a-string-iii/

function reverseWords(s: string): string {
  // Split the string into an array of words
  const words = s.split(" ");

  // Reverse the characters in each word
  const reversedWords = words.map((word) => word.split("").reverse().join(""));

  // Join the array of reversed words back into a string
  return reversedWords.join(" ");
}

// Runtime 73ms (Beats31.08%)
// Memory 49.15MB (Beats52.20%)
