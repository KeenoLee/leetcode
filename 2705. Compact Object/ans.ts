// 2705. Compact Object
// Medium
// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:

// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// Constraints:

// obj is a valid JSON object
// 2 <= JSON.stringify(obj).length <= 106

// https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, any> | any[];

function compactObject(obj: Obj): Obj {
  const stack: [Obj, Obj][] = [[obj, Array.isArray(obj) ? [] : {}]];
  let newObj: Obj = stack[0][1];

  while (stack.length > 0) {
    const [currObj, newCurrObj] = stack.pop()!;

    for (const key in currObj) {
      const val = currObj[key];

      if (!val) continue;

      if (typeof val !== "object") {
        Array.isArray(newCurrObj)
          ? newCurrObj.push(val)
          : (newCurrObj[key] = val);
        continue;
      }

      const newSubObj: Obj = Array.isArray(val) ? [] : {};
      Array.isArray(newCurrObj)
        ? newCurrObj.push(newSubObj)
        : (newCurrObj[key] = newSubObj);
      stack.push([val, newSubObj]);
    }
  }

  return newObj;
}
