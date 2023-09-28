// 128. Longest Consecutive Sequence
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums) {
  const numSet = new Set(nums); // Convert the array into a set for efficient lookups
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      // Check if the current number is the start of a sequence
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Test cases
const nums1 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums1)); // Output: 4

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums2)); // Output: 9
