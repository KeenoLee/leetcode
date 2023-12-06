// 1085. Sum of Digits in the Minimum Number
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, return 0 if the sum of the digits of the minimum integer in nums is odd, or 1 otherwise.

// Example 1:

// Input: nums = [34,23,1,24,75,33,54,8]
// Output: 0
// Explanation: The minimal element is 1, and the sum of those digits is 1 which is odd, so the answer is 0.
// Example 2:

// Input: nums = [99,77,33,66,55]
// Output: 1
// Explanation: The minimal element is 33, and the sum of those digits is 3 + 3 = 6 which is even, so the answer is 1.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/description/

function sumOfDigits(nums: number[]): number {
  // Find the minimum number in the array
  const minNum = Math.min(...nums);

  // Calculate the sum of the digits of the minimum number
  let sum = 0;
  let number = minNum;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  // Check if the sum is odd or even and return the corresponding value
  return sum % 2 === 0 ? 1 : 0;
}

// Runtime 56ms (Beats 50.00%)
// Memory 43.30MB (Beats 50.00%)
