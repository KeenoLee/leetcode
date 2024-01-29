// 2727. Is Object Empty
// Easy
// Companies
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105

// https://rapidapi.com/hub/?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  if (Array.isArray(obj)) {
    return obj.length == 0;
  }
  return Object.keys(obj).length == 0;
}

// Runtime 50 ms (Beats 87.38%)
// Memory 52.41 MB (Beats 5.53%)
