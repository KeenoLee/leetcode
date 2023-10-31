// 628. Maximum Product of Three Numbers
// Easy
// Topics
// Companies
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// https://leetcode.com/problems/maximum-product-of-three-numbers/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;

  // Calculate the two possible products
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of three largest numbers
  const product2 = nums[0] * nums[1] * nums[n - 1]; // Product of two smallest and one largest number

  // Return the maximum of the two products
  return Math.max(product1, product2);
};

// Runtime 108ms (Beats 8.38%)
// Memory 46.48MB (Beats 71.56%)
