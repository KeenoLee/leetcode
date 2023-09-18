// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

function numJewelsInStones(jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;

  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }

  return count;
}

// Example usage:
const jewels1 = "aA";
const stones1 = "aAAbbbb";
console.log(numJewelsInStones(jewels1, stones1)); // Output: 3

const jewels2 = "z";
const stones2 = "ZZ";
console.log(numJewelsInStones(jewels2, stones2)); // Output: 0
