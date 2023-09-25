// 49. Group Anagrams
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs) {
  const anagrams = new Map();

  for (const word of strs) {
    // Sort the characters of the word
    const sortedWord = word.split("").sort().join("");

    // If the sorted word is not in the map, create a new entry
    if (!anagrams.has(sortedWord)) {
      anagrams.set(sortedWord, [word]);
    } else {
      // Otherwise, append the word to the existing entry
      anagrams.get(sortedWord).push(word);
    }
  }

  // Convert the values of the map to an array and return
  return Array.from(anagrams.values());
}

// Test cases
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

const strs2 = [""];
console.log(groupAnagrams(strs2)); // Output: [[""]]

const strs3 = ["a"];
console.log(groupAnagrams(strs3)); // Output: [["a"]]
