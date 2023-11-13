// 448. Find All Numbers Disappeared in an Array
// Easy
// Topics
// Companies
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;

  // Step 1: Mark the numbers that are present
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1];
    }
  }

  // Step 2: Find the numbers that are not marked
  const result = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

// Runtime 68ms (beats98.50%)
// Memory 49.31MB (beats95.04%)
