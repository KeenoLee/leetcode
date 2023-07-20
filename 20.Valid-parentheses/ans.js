// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//----------------------------------------------------------------

// Answer

/* -------- Incorrect -------*/

// Failed in this input
// Last Executed Input
// "(){}}{"

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   const checkingList = ["()","{}","[]"];

//   for(const item of checkingList) {
//     if(s.includes(item)){
//       return true
//     }
//   }
//   return false
// };

// const s = '()'
// isValid(s)

/* -------- correct -------*/

function isValid(s) {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const lastOpeningBracket = stack[stack.length - 1];
      const correspondingClosingBracket = bracketMap[lastOpeningBracket];

      if (correspondingClosingBracket !== char) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}
