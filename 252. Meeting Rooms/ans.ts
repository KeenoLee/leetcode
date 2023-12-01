// 252. Meeting Rooms
// Easy
// Topics
// Companies
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: true

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti < endi <= 106

// https://leetcode.com/problems/meeting-rooms/

function canAttendMeetings(intervals: number[][]): boolean {
  // Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    // If the end time of the current interval is greater than the start time of the next,
    // there is an overlap, so return false.
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }

  // If no overlaps were found, return true.
  return true;
}

// Runtime 53ms (Beats 96.19%)
// Memory 44.85MB (Beats 44.85%)
