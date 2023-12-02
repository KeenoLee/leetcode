// 263. Ugly Number
// Solved
// Easy
// Topics
// Companies
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

// Constraints:

// -231 <= n <= 231 - 1

// https://leetcode.com/problems/ugly-number/

function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  // Divide n by 2, 3, and 5 as long as it is divisible
  for (let i of [2, 3, 5]) {
    while (n % i === 0) {
      n /= i;
    }
  }

  // If the resulting number is 1, it is an ugly number
  return n === 1;
}

// Runtime 58ms (Beats 87.04%)
// Memory 45.29MB (Beats 10.19%)
