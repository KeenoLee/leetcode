// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Solution 1:
function isPalindrome(x) {
  // Convert the integer to a string
  const strX = String(x);

  // Compare the string with its reverse
  return strX === strX.split("").reverse().join("");
}

// Test Case;
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

// Solution 2: Better performance
function isPalindrome(x) {
  // Handle negative numbers and numbers ending with 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  while (x > reversed) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  // For even-length numbers, x and reversed will have the same number of digits
  // For odd-length numbers, x will have one less digit than reversed
  // In both cases, we can compare x and reversed to check for a palindrome
  return x === reversed || x === Math.floor(reversed / 10);
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
