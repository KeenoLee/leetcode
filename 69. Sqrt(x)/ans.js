// 69. Sqrt(x)
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Constraints:

// 0 <= x <= 231 - 1

// https://leetcode.com/problems/sqrtx/

const mySqrt = (x) => {
  if (x <= 1) {
    return x; // Base case: 0 and 1 are their own square roots.
  }

  let left = 1;
  let right = Math.floor(x / 2); // Since sqrt(x) <= x / 2 for x > 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid; // Found the exact square root.
    } else if (square < x) {
      left = mid + 1; // Adjust the left boundary.
    } else {
      right = mid - 1; // Adjust the right boundary.
    }
  }

  return right; // Return the floor value of the square root.
};
