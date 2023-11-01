// 674. Longest Continuous Increasing Subsequence
// Easy
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109

// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let maxLength = 1; // Initialize the maximum length to 1 (for the first element)
  let currentLength = 1; // Initialize the current length to 1 (for the first element)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // If the current element is greater than the previous one, it's part of an increasing subsequence
      currentLength++;
    } else {
      // If not, start a new increasing subsequence
      currentLength = 1;
    }

    // Update the maximum length
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

// Runtime 59ms (Beats 23.59%)
// Memory 42.26MB (Beats 78.17%)
