// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

function canConstruct(ransomNote, magazine) {
  const ransomNoteFreq = new Map();
  const magazineFreq = new Map();

  // Count the frequency of characters in ransomNote
  for (const char of ransomNote) {
    ransomNoteFreq.set(char, (ransomNoteFreq.get(char) || 0) + 1);
  }

  // Count the frequency of characters in magazine
  for (const char of magazine) {
    magazineFreq.set(char, (magazineFreq.get(char) || 0) + 1);
  }

  // Check if ransomNote can be constructed
  for (const [char, count] of ransomNoteFreq) {
    if (!magazineFreq.has(char) || magazineFreq.get(char) < count) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(canConstruct("a", "b")); // Output: false
console.log(canConstruct("aa", "ab")); // Output: false
console.log(canConstruct("aa", "aab")); // Output: true
