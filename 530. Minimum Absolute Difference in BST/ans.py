# 530. Minimum Absolute Difference in BST
# Easy
# Topics
# Companies
# Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

# Example 1:


# Input: root = [4,2,6,1,3]
# Output: 1
# Example 2:


# Input: root = [1,0,48,null,null,12,49]
# Output: 1
 

# Constraints:

# The number of nodes in the tree is in the range [2, 104].
# 0 <= Node.val <= 105

# https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        nodeValues = []

        def dfs(node):
            if node is None:
                return
            nodeValues.append(node.val)
            dfs(node.left)
            dfs(node.right)
        
        dfs(root)

        nodeValues.sort()
        minDifference = 1e9
        for i in range(1, len(nodeValues)):
            minDifference = min(minDifference, nodeValues[i] - nodeValues[i-1])

        return minDifference