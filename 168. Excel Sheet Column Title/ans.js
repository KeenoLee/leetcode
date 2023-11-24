// 168. Excel Sheet Column Title
// Easy
// Topics
// Companies
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"

// Constraints:

// 1 <= columnNumber <= 231 - 1

// https://leetcode.com/problems/excel-sheet-column-title/description/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--; // Decrease the column number to make it 0-indexed
    let remainder = columnNumber % 26;
    let letter = String.fromCharCode(65 + remainder); // Convert to corresponding letter
    result = letter + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

// Runtime 51ms (Beats 49.04%)
// Memory 41.74MB (Beats 46.68%)
