// 226. Invert Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// https://leetcode.com/problems/invert-binary-tree/description/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  // Swap the left and right subtrees
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Invert the left and right subtrees recursively
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// Runtime 49ms (Beats 72.53%)
// Memory 41.84MB (Beats 87.90%)
