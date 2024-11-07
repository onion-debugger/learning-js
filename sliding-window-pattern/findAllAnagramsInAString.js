// Given a string [original] and a string [check], find the starting
// index of all substrings of [original] that is an anagram of [check].
// The output must be sorted in ascending order.
//
// Example:
// input: original = "cbaebabacd" check = "abc"
// output: [0, 6];
const findAllAnagrams = (original, check) => {
  const windowSize = check.length;
  const length = original.length;

  if (length < windowSize) return [];

  const result = [];
  const checkCount = Array(26).fill(0);
  const window = Array(26).fill(0);

  for (let right = windowSize; right < length; ++right) {}

  return result;
};

// Explanation:
// The sliding window is maintained at the size of the `check` and we keep track of
// number of each type of characters inside the window in a hashmap
