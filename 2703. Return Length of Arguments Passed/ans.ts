// 2703. Return Length of Arguments Passed
// Easy
// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

// Constraints:

// args is a valid JSON array
// 0 <= args.length <= 100

// https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Runtime 57ms (Beats 51.56%)
// Memory 51.50 MB (Beats 5.51%)

// Interview Tips:
// Can you explain what the arguments object is in JavaScript?

// The arguments object is a special object available inside all JavaScript functions. It contains an array-like collection of the arguments passed to the function. It allows accessing the arguments even if they were not explicitly defined as function parameters.
// Can we modify the arguments object?

// Yes, the arguments object can be modified by assigning new values to its elements directly. However, it's important to note that the arguments object is not a true JavaScript array, so it does not have the array methods like push(), pop(), etc. available to directly modify it. Instead, you can modify the elements using the index notation (arguments[index] = value).
// Can we use the rest parameter syntax to solve this problem?

// Yes, starting from ECMAScript 6 (ES6), JavaScript introduced the rest parameter syntax, denoted by ...args, which allows gathering multiple function arguments into an array. We have used this syntax to solve the problem in approach 2.
// How will you convert arguments object into a regular array?

// The most common way is using the spread operator (...) to unpack the elements of the arguments object into a new array. This method works well when you want a concise and readable way to convert the arguments object into an array.
// function convertToArray(...args) {
//   return [...args];
// }
// Other way is by utilizing the Array.from() method to create a new array from an arguments object.
