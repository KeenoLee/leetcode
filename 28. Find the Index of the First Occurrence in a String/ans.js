// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

function strStr(haystack, needle) {
  if (needle === "") return 0; // If the needle is an empty string, it's always a match.

  // Step 1: Compute the prefix function (failure function) for the needle.
  const prefix = [0]; // The prefix function
  let j = 0; // The length of the current prefix

  for (let i = 1; i < needle.length; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = prefix[j - 1];
    }

    if (needle[i] === needle[j]) {
      j++;
    }

    prefix.push(j);
  }

  // Step 2: Search for the needle in the haystack using the prefix function.
  j = 0; // The length of the current match

  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = prefix[j - 1];
    }

    if (haystack[i] === needle[j]) {
      j++;
    }

    if (j === needle.length) {
      // Found a match
      return i - j + 1;
    }
  }

  return -1; // Needle not found in haystack
}

// Test cases
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
