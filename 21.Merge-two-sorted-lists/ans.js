// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

//----------------------------------------------------------------

// Answer

/* -------- Incorrect -------*/

// var mergeTwoLists = function(list1, list2) {
//   const array1 = Array.isArray(list1) ? [...list1] : [];
//   const array2 = Array.isArray(list2) ? [...list2] : [];
//   const concatArray = array1.concat(array2);
//   console.log('concatArray', concatArray);
//   return sortedArray = concatArray.sort((a, b) => a - b);
// };

// const list1 = [1, 2, 4];
// const list2 = [1, 3, 4];
// mergeTwoLists(list1, list2);

/* -------- Correct -------*/

var mergeTwoLists = function (l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};
