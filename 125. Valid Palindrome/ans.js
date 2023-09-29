// 125. Valid Palindrome
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// https://leetcode.com/problems/valid-palindrome/description/

function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Test cases
const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1)); // Output: true

const s2 = "race a car";
console.log(isPalindrome(s2)); // Output: false

const s3 = " ";
console.log(isPalindrome(s3)); // Output: true
