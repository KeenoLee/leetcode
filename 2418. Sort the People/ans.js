// 2418. Sort the People
// Easy
// Topics
// Companies
// Hint
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// Constraints:

// n == names.length == heights.length
// 1 <= n <= 103
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 105
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.

// https://leetcode.com/problems/sort-the-people/description/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = [];
  const n = names.length;

  // Create an array of objects containing names and heights
  for (let i = 0; i < n; i++) {
    people.push({ name: names[i], height: heights[i] });
  }

  // Sort the array of objects by height in descending order
  people.sort((a, b) => b.height - a.height);

  // Extract the sorted names from the sorted array of objects
  const sortedNames = people.map((person) => person.name);

  return sortedNames;
};

// Runtime 65ms (Beats 85.58%)
// Memory 46.46MB (Beats 79.56%)
