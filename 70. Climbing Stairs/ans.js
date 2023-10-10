// 70. Climbing Stairs
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  if (n === 1) {
    return 1; // If there's only one step, there's only one way to climb it.
  }

  const dp = new Array(n + 1); // Create an array to store the number of ways for each step.
  dp[1] = 1; // There's only one way to reach the first step.
  dp[2] = 2; // There are two ways to reach the second step: (1 step + 1 step) or (2 steps).

  for (let i = 3; i <= n; i++) {
    // The number of ways to reach the current step is the sum of ways to reach the previous two steps.
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// Runtime 38ms
// Memory 41.73 MB
