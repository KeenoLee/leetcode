// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return ""; // Empty array, no common prefix
  }

  let longestPrefix = strs[0]; // Initialize with the first string

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < longestPrefix.length; j++) {
      if (longestPrefix[j] !== strs[i][j]) {
        longestPrefix = longestPrefix.substring(0, j);
        break; // Stop inner loop when characters don't match
      }
    }
  }

  return longestPrefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
