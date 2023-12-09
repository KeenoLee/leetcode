// 541. Reverse String II
// Easy
// Topics
// Companies
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

// https://leetcode.com/problems/reverse-string-ii/

function reverseStr(s: string, k: number): string {
  let result = "";

  for (let i = 0; i < s.length; i += 2 * k) {
    // Extract the next 2k segment
    let segment = s.substring(i, i + 2 * k);

    // Reverse the first k characters
    let partToReverse = segment.substring(0, k).split("").reverse().join("");

    // Append the reversed part and the rest of the segment to the result
    result += partToReverse + segment.substring(k);
  }

  return result;
}

// Runtime 67ms (Beats 28.36%)
// Memory 44.30MB (Beats 94.03%)
