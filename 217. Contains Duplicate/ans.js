// 217. Contains Duplicate

// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums) {
  // Create an empty Set to store unique elements
  const uniqueSet = new Set();

  // Iterate through the array
  for (const num of nums) {
    // If the element is already in the Set, it's a duplicate
    if (uniqueSet.has(num)) {
      return true;
    }
    // Otherwise, add it to the Set
    uniqueSet.add(num);
  }

  // No duplicates were found
  return false;
}

// Test cases
const nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1)); // Output: true

const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2)); // Output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums3)); // Output: true
