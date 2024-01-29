// 2619. Array Prototype Last
// Solved
// Easy
// Companies
// Hint
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// Constraints:

// arr is a valid JSON array
// 0 <= arr.length <= 1000

// https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function (): number {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};

// Runtime 60ms (Beats 27.69%)
// Memory 49.74MB (Beats 10.94%)
