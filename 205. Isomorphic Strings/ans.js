// 205. Isomorphic Strings
// Easy
// Topics
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false; // If the lengths are different, they can't be isomorphic.
  }

  const sToT = {}; // Hash map for mapping characters from s to t.
  const tToS = {}; // Hash map for mapping characters from t to s.

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sToT[sChar] === undefined && tToS[tChar] === undefined) {
      sToT[sChar] = tChar; // Create a mapping from s to t.
      tToS[tChar] = sChar; // Create a mapping from t to s.
    } else if (sToT[sChar] !== tChar || tToS[tChar] !== sChar) {
      return false; // If the mappings don't match, they are not isomorphic.
    }
  }

  return true; // If all characters are successfully mapped, they are isomorphic.
};

//
// Runtime 77ms
// Beats 11.44% of users with JavaScript

// Memory 42.03MB
// Beats 85.55%of users with JavaScript

// Better Run time soloution

var isIsomorphic = function (s, t) {
  const map = new Map();
  const mapped = new Set();
  for (let i = 0; i < s.length; i++) {
    if (
      (map.has(s[i]) && map.get(s[i]) !== t[i]) ||
      (!map.has(s[i]) && mapped.has(t[i]))
    ) {
      return false;
    } else {
      map.set(s[i], t[i]);
      mapped.add(t[i]);
    }
  }
  return true;
};

// RunTime 55ms
