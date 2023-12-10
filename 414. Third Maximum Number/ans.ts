// 414. Third Maximum Number
// Easy
// Topics
// Companies
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// https://leetcode.com/problems/third-maximum-number/description/

function thirdMax(nums: number[]): number {
  let firstMax: number | null = null;
  let secondMax: number | null = null;
  let thirdMax: number | null = null;

  for (const num of nums) {
    // Skip if it's the same as any of the top 3 max numbers
    if (num === firstMax || num === secondMax || num === thirdMax) {
      continue;
    }

    if (firstMax === null || num > firstMax) {
      // Update all three max numbers
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (secondMax === null || num > secondMax) {
      // Update second and third max numbers
      thirdMax = secondMax;
      secondMax = num;
    } else if (thirdMax === null || num > thirdMax) {
      // Update only third max number
      thirdMax = num;
    }
  }

  // Return third max if exists, else return the first max
  return thirdMax !== null ? thirdMax : firstMax!;
}

// Runtime 56ms (Beats 69.86%)
// Memory 45.34MB (Beats 27.16%)
