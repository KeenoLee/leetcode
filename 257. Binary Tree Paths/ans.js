// 257. Binary Tree Paths
// Easy
// Topics
// Companies
// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

// https://leetcode.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];

  // Define a recursive helper function to traverse the tree
  const dfs = (node, path) => {
    if (!node) return; // Base case, if the node is null, return

    // Add the current node's value to the current path
    path += node.val.toString();

    // If it's a leaf node, add the path to the list of paths
    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      path += "->"; // Non-leaf node, add '->' separator to the path
      dfs(node.left, path); // Recursively traverse the left subtree
      dfs(node.right, path); // Recursively traverse the right subtree
    }
  };

  // Start the DFS traversal from the root with an empty path
  dfs(root, "");

  return paths;
};

// Runtime 52ms (Beats 69.44%)
// Memory 43.50MB (Beats 64.44%)
