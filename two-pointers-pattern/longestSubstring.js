const lengthOfLongestSubstring = (str) => {
  const seenLetters = {};
  let L = 0;
  let R = 0;

  let longestSubString = 0;

  // loop
  while (R < str.length) {
    seenLetters[str[R]] += 1;
    if (seenLetters[str[R]] > 1) {
      seenLetters[str[L]] -= 1;
      L += 1;
    }

    let currentSubStringLength = R - L + 1;
    if (currentSubStringLength > longestSubString) {
      longestSubString = currentSubStringLength;
    }
  }
  return longestSubString;
};
