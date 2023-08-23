// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = new Array(26).fill(0); // Assuming lowercase English letters

  // Count occurrences of characters in s
  for (let char of s) {
    charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Decrement occurrences of characters in t
  for (let char of t) {
    charCount[char.charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  // Check if all counts are zero
  for (let count of charCount) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
