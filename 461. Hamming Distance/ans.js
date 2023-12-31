// 461. Hamming Distance
// Easy
// Topics
// Companies
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1

// Constraints:

// 0 <= x, y <= 231 - 1

// https://leetcode.com/problems/hamming-distance/description/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // XOR the two numbers
  var xorResult = x ^ y;
  var distance = 0;

  // Count the number of set bits (1s) in the XOR result
  while (xorResult > 0) {
    if (xorResult & 1) {
      distance++;
    }
    xorResult >>= 1; // Right shift to check the next bit
  }

  return distance;
};

// Runtime 50ms (Beats 67.72%)
// Memory 41.70MB (Beats 67.01%)
