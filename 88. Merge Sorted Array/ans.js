// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

function merge(nums1, m, nums2, n) {
  const merged = new Array(m + n);
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      merged[p] = nums1[p1];
      p1--;
    } else {
      merged[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // Copy remaining elements from nums2 to merged
  while (p2 >= 0) {
    merged[p] = nums2[p2];
    p2--;
    p--;
  }

  // Copy merged elements back to nums1
  for (let i = 0; i < m + n; i++) {
    nums1[i] = merged[i];
  }
}

// Test cases
const nums1_1 = [1, 2, 3, 0, 0, 0];
const m_1 = 3;
const nums2_1 = [2, 5, 6];
const n_1 = 3;
merge(nums1_1, m_1, nums2_1, n_1);
console.log(nums1_1); // Output: [1, 2, 2, 3, 5, 6]

const nums1_2 = [1];
const m_2 = 1;
const nums2_2 = [];
const n_2 = 0;
merge(nums1_2, m_2, nums2_2, n_2);
console.log(nums1_2); // Output: [1]

const nums1_3 = [0];
const m_3 = 0;
const nums2_3 = [1];
const n_3 = 1;
merge(nums1_3, m_3, nums2_3, n_3);
console.log(nums1_3); // Output: [1]
