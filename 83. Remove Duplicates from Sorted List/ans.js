// 83. Remove Duplicates from Sorted List
// Easy
// Topics
// Companies
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // Skip the duplicate node
    } else {
      current = current.next; // Move to the next node
    }
  }

  return head; // Return the updated linked list
};

// Runtime 59ms (Beats 65.74%)
// Memory 43.55MB (Beats 94.38%)
