// 508. Most Frequent Subtree Sum
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

// The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

// Example 1:

// Input: root = [5,2,-3]
// Output: [2,-3,4]
// Example 2:

// Input: root = [5,2,-5]
// Output: [2]

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

// https://leetcode.com/problems/most-frequent-subtree-sum/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  if (!root) return [];

  const sumMap = new Map(); // To store subtree sums and their frequencies
  let maxFrequency = 0; // To keep track of the maximum frequency

  // Helper function to calculate the subtree sum of a node
  function calculateSubtreeSum(node) {
    if (!node) return 0;

    const leftSum = calculateSubtreeSum(node.left);
    const rightSum = calculateSubtreeSum(node.right);
    const currentSum = node.val + leftSum + rightSum;

    if (sumMap.has(currentSum)) {
      sumMap.set(currentSum, sumMap.get(currentSum) + 1);
    } else {
      sumMap.set(currentSum, 1);
    }

    maxFrequency = Math.max(maxFrequency, sumMap.get(currentSum));

    return currentSum;
  }

  calculateSubtreeSum(root);

  const result = [];

  // Iterate through the sumMap to find sums with maximum frequency
  for (const [sum, frequency] of sumMap) {
    if (frequency === maxFrequency) {
      result.push(sum);
    }
  }

  return result;
};

// Runtime 78ms (Beats 45.31%)
// Memory 49.95MB (Beats 32.81%)
