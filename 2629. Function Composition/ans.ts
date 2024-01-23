// 2629. Function Composition
// Easy
// Companies
// Hint
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// Constraints:

// -1000 <= x <= 1000
// 0 <= functions.length <= 1000
// all functions accept and return a single integer

// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript

type F = (x: number) => number;

function compose(functions: F[]): F {
  return (x: number) => functions.reduceRight((acc, f) => f(acc), x);
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Approach 2: Function Composition using Array.reduceRight()
// Intuition
// In the first approach, we used iteration to apply the functions from right to left. Alternatively, we can utilize the Array.reduceRight() method to achieve the same result. The reduceRight() method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value. In this case, our accumulator will be the input value x, and the function will be the composition of the functions in the array.

// Using reduceRight() simplifies the code and provides a more functional programming style solution. The key is to understand how the Array.reduceRight() method works and how it can be applied to this problem.

// Algorithm
// Inside the compose function, return another function that takes an input value x.
// Use the Array.reduceRight() method to iterate over the functions from right to left.
// For each function in the array, apply it to the accumulator (x initially) and update the accumulator with the result.
// After iterating through all the functions, return the final accumulator value as the output of the composed function.
// Implementation

// The key here is to understand how Array.reduceRight() works.

// Array.reduceRight() is a built-in JavaScript array method that can be used to apply a function to each element of an array, starting from the rightmost element and moving towards the left. It takes two arguments: a reducer function and an optional initial value for the accumulator.

// The reducer function itself has four arguments: the accumulator, the current value, the current index, and the array being processed. The accumulator is a value that is being built up with each iteration, and it is returned at the end of the process. In our case, the accumulator represents the intermediate result of applying the functions in the composition.

// Here's a breakdown of how Array.reduceRight() works in the context of the compose function:

// The compose function receives an array of functions and returns a new function that takes an input value x.
// When the new function is called with an input value x, it calls Array.reduceRight() on the functions array.
// The reducer function is called for each function in the array, starting from the rightmost element and moving towards the left. The accumulator initially holds the input value x.
// In each iteration, the reducer function applies the current function to the accumulator and updates the accumulator with the result.
// Once all the functions have been applied, the final value of the accumulator is returned.
// To illustrate this process, let's consider a simple example:

// The compose function receives an array functions with two functions: x => x * 2 and x => x + 1.
// When composedFn is called with the input value 3, it calls Array.reduceRight() on the functions array.
// The reducer function starts with the rightmost function x => x + 1 and applies it to the accumulator (initially 3). The accumulator becomes 3 + 1 = 4.
// The reducer function then moves to the next function x => x * 2 and applies it to the accumulator (now 4). The accumulator becomes 4 * 2 = 8.
// The final value of the accumulator, 8, is returned as the result of the composed function.
// To sum up, by using Array.reduceRight(), we can easily apply the function composition in a clean and concise manner.
