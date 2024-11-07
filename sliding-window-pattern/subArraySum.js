// Given an array (list) nums consisted of only non-negative integers,
// find the largest sum among all subarrays of length k in nums.

// For example, if the input is nums = [1, 2, 3, 7, 4, 1], k = 3,
// then the output would be 14 as the largest length 3 subarray sum
// is given by [3, 7, 4] which sums to 14.

const subArraySum = (arr, k) => {
  let windowSum = 0;

  for (let i = 0; i < k; ++i) {
    windowSum += arr[i];
  }
  let maximum = windowSum;

  for (let right = k; right < arr.length; ++right) {
    const left = right - k;
    windowSum -= nums[left];
    windowSum += nums[right];
    maximum = Math.max(maximum, windowSum);
  }
  return maximum;
};

// Fixed Size Sliding Window Template
function slidingWindowFixed(input, windowSize) {
  ans = window = input.slice(0, windowSize);
  for (const right = windowSize; right < input.length; ++right) {
    const left = right - windowSize;
    // remove input[left] from window.
    // append input[right] to window
    // ans = optimal(ans, window);
  }
  return ans;
}
