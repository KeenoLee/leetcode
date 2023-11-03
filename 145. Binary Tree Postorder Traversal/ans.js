// 145. Binary Tree Postorder Traversal
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

// https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/1090328234/

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length > 0) {
    const node = stack1.pop();
    stack2.push(node);

    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right);
    }
  }

  while (stack2.length > 0) {
    result.push(stack2.pop().val);
  }

  return result;
};

// Runtime 48ms (Beats 75.53%)
// Memory 42.36MB (Beats 19.64%)

var postorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }

  traverse(root);
  return result;
};

// Runtime 60ms (Beats 8.00%)
// Memory 42.30MB (Beats 19.64%)
