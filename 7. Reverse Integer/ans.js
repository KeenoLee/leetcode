// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

// https://leetcode.com/problems/reverse-integer/submissions/1093335892/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  if (x === 0) return 0;

  const isNegative = x < 0;
  x = Math.abs(x);

  let reversed = 0;
  while (x > 0) {
    const pop = x % 10;
    x = Math.floor(x / 10);

    if (reversed > (INT_MAX - pop) / 10) return 0;

    reversed = reversed * 10 + pop;
  }

  return isNegative ? -reversed : reversed;
};

// Runtime 57ms (77.57%)
// Memory 44.36MB (18.41%)
