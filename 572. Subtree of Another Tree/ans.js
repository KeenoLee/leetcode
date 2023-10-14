// Code

// Testcase
// Testcase
// Result

// 572. Subtree of Another Tree
// Easy
// Topics
// Companies
// Hint
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Constraints:

// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

// https://leetcode.com/problems/subtree-of-another-tree/description/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var isSubtree = function (root, subRoot) {
  if (!root) {
    return false; // If the root tree is empty, subRoot cannot be a subtree.
  }

  // Check if the current root node matches the subRoot.
  if (isSameTree(root, subRoot)) {
    return true;
  }

  // Recursively check the left and right subtrees.
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true; // Both trees are empty, so they are the same.
  }
  if (!tree1 || !tree2) {
    return false; // One tree is empty, the other is not, so they are different.
  }

  // Check if the current nodes are the same and recursively check left and right subtrees.
  return (
    tree1.val === tree2.val &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
}

// Runtime 62ms (Beat 93.02%)
// Memory 49.00MB (Beats 66.98%)
