// 551. Student Attendance Record I
// Easy
// Topics
// Companies
// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Example 1:

// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
// Example 2:

// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

// Constraints:

// 1 <= s.length <= 1000
// s[i] is either 'A', 'L', or 'P'.

// https://leetcode.com/problems/student-attendance-record-i/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0; // Count of 'A's
  let consecutiveLateCount = 0; // Count of consecutive 'L's

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "A") {
      absentCount++;
      consecutiveLateCount = 0; // Reset consecutive late count
    } else if (char === "L") {
      consecutiveLateCount++;
    } else {
      consecutiveLateCount = 0; // Reset consecutive late count for 'P'
    }

    if (absentCount >= 2 || consecutiveLateCount >= 3) {
      return false; // Student is not eligible
    }
  }

  return true; // Student is eligible
};

// Runtime 57ms (Beats 25.43%)
// Memory 42.45MB (Beats 21.43%)
