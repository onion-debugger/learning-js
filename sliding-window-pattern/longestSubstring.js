const longestSubstringWithoutRepeatingCharacters = (s) => {
  const characterWindow = new Set();
  let left = 0;

  for (let right = 0; right != s.length; ++right) {
    const element = s[right];
    characterWindow.add(element);
    // Invalid condition
    if (characterWindow.has(element)) {
      characterWindow.delete(s[left]);
      characterWindow.add(element);
      left += 1;
    }
  }
  console.log(characterWindow);
  return characterWindow.size;
};

let input = "abcdbea";
console.log(longestSubstringWithoutRepeatingCharacters(input));
input = "aba";
console.log(longestSubstringWithoutRepeatingCharacters(input));
input = "abccabcabcc";
console.log(longestSubstringWithoutRepeatingCharacters(input));
input = "aaaabaaa";
console.log(longestSubstringWithoutRepeatingCharacters(input));
//
// Solution steps:
// Use a set to keep track of characters in the current window.
// Initialize two pointers for the window's start and end.
// Expand the window by moving the end pointer and add new characters to the set.
// If a duplicate character is found, contract the window by moving the start pointer
// until the duplicate is removed.
// Keep track of the maximum length of the window.
