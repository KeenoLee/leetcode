// 246. Strobogrammatic Number
// Easy
// Topics
// Companies
// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Example 1:

// Input: num = "69"
// Output: true
// Example 2:

// Input: num = "88"
// Output: true
// Example 3:

// Input: num = "962"
// Output: false

// Constraints:

// 1 <= num.length <= 50
// num consists of only digits.
// num does not contain any leading zeros except for zero itself.

// https://leetcode.com/problems/strobogrammatic-number/

function isStrobogrammatic(num: string): boolean {
  const strobogrammaticPairs: { [key: string]: string } = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6",
  };

  let left = 0,
    right = num.length - 1;
  while (left <= right) {
    if (
      !strobogrammaticPairs[num[left]] ||
      strobogrammaticPairs[num[left]] !== num[right]
    ) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Runtime 43ms (Beats 100%)
// Memory 42.22MB (Beats 94.44%)
