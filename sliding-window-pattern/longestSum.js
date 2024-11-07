const subArraySumLongest = (nums, target) => {
  let windowSum = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    windowSum += nums[right];

    if (windowSum > target) {
      windowSum -= nums[left];
      windowSum += nums[right];
      left += 1;
    }
    right += 1;
  }
  return left;
};

const input = [1, 6, 3, 1, 2, 4, 5];
const target = 10;

console.log(subArraySumLongest(input, target));

// Explanation:
// Starting from the empty array, we know that this window is a valid
// window as it satisfies `sum(window) <= target`
//
// To find a longer valid subarray, we extend the window towards the right,
// each time adding up the total `window_sum` to confirm that the sum does not
// exceed the `target`.

// Template
function slidingWindowFlexibleLongest(input) {
  // initialize window, answer
  var left = 0;
  for (var right = 0; right < input.length; ++right) {
    // append input[right] to window;
    while (invalid(window)) {
      // update left until window is valid again
      // ans = max(ans, window);
      // remove input[left] from window;
      ++left;
    }

    // answer = max(answer, window);
  }

  return answer;
}

function slidingWindowFlexibleShortest(input) {
  // initialize window, ans
  var left = 0;
  for (var right = 0; right < input.length; ++right) {
    // append input[right] to window
    while (valid(window)) {
      ans = min(ans, window); // window is guaranteed to be valid here
      // remove input[left] from window
      ++left;
    }
  }
  return ans;
}
