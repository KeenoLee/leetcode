// 119. Pascal's Triangle II
// Easy
// Topics
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

// Constraints:

// 0 <= rowIndex <= 33

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex < 0) {
    return [];
  }

  const row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [1];

    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1);
    row.length = 0;
    row.push(...newRow);
  }

  return row;
};

// Runtime 57ms (Beats 22.97%)
// Memory 42.06 MB (Beats 40.26%)
