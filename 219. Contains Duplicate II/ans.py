# 219. Contains Duplicate II
# Easy
# Topics
# Companies
# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true
# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true
# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false
 

# Constraints:

# 1 <= nums.length <= 105
# -109 <= nums[i] <= 109
# 0 <= k <= 105

# https://leetcode.com/problems/contains-duplicate-ii/?envType=study-plan-v2&envId=top-interview-150

class Solution:
   def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dic = {}
        for i, j in enumerate(nums):
            if j in dic and i - dic[j] <= k:
                return True
            dic[j] = i
        return False

## Runtime 457ms (Beats 72.10%)
## Memory 29.88MB (Beats 49.48%)