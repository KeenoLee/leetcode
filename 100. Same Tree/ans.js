// 100. Same Tree
// Easy
// Topics
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// https://leetcode.com/problems/same-tree/

var isSameTree = function (p, q) {
  // If both trees are empty, they are the same.
  if (!p && !q) {
    return true;
  }

  // If one of the trees is empty but the other is not, they are not the same.
  if (!p || !q) {
    return false;
  }

  // If the current nodes' values are not equal, they are not the same.
  if (p.val !== q.val) {
    return false;
  }

  // Recursively check the left and right subtrees.
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Runtime 59ms (Beat 12.76%)
// Memory 42.22MB (Beats 42.39%)
