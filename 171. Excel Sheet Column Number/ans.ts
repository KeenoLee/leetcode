// 171. Excel Sheet Column Number
// Solved
// Easy
// Topics
// Companies
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

// https://leetcode.com/problems/excel-sheet-column-number/

function titleToNumber(columnTitle: string): number {
  let number = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    // Compute the value directly from the ASCII code of the character
    let value = columnTitle.charCodeAt(i) - 64; // ASCII code of 'A' is 65

    // Update the total number
    number = number * 26 + value;
  }

  return number;
}

// Runtime 66ms (Beats 48.76%)
// Memory 45.35MB (Beats 10.95%)
