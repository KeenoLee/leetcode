// iven a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

function firstUniqChar(s) {
  const charCount = new Map(); // Use a map to store character counts

  // First pass to count characters
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Second pass to find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1; // Return -1 if there are no non-repeating characters
}

// Test cases
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
