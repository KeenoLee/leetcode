// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function addBinary(a, b) {
  let result = "";
  let carry = 0; // Initialize the carry to 0

  // Start from the end of the strings and move towards the beginning
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    // Convert characters to integers (0 or 1)
    const numA = i >= 0 ? parseInt(a[i]) : 0;
    const numB = j >= 0 ? parseInt(b[j]) : 0;

    // Calculate the sum of the current bits along with the carry
    const sum = numA + numB + carry;

    // Determine the current bit of the result and update the carry
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    // Move to the next bit
    i--;
    j--;
  }

  // If there's a carry left, add it to the result
  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

// Test cases
console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
