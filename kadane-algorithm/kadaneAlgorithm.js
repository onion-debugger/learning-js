// Find a non-empty subarray with the largest sum.
// [4, -1, 2, -7, 3, 4]

function bruteForce(nums) {
  let maxSum = nums[0];

  for (let L = 0; L < nums.length; L++) {
    let curSum = 0;
    for (let R = L; R < nums.length; R++) {
      curSum += nums[R];
      maxSum = Math.max(maxSum, curSum);
    }
  }

  return maxSum;
}

// The intuition behind Kadane's algorithm is that:
//   If all elements in the array are positive,
//   the maximum sum subarray is the entire array.
//   If we ever have a negative sum subarray,
//   that's the case we want to avoid.
function kadanes(nums) {
  let maxSum = nums[0];
  let curSum = 0;

  for (let n of nums) {
    curSum = Math.max(curSum, 0);
    curSum += n;
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}

const slidingWindowKadanes = (nums) => {
  let maxSum = nums[0];
  let curSum = 0;
  let maxL = 0,
    maxR = 0;
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (curSum < 0) {
      curSum = 0;
      L = R;
    }
    curSum += nums[R];
    if (curSum > maxSum) {
      maxSum = curSum;
      maxL = L;
      maxR = R;
    }
  }
  return [maxL, maxR];
};

const input = [4, -1, 2, -7, 3, 4];
console.log(slidingWindowKadanes(input));
console.log(bruteForce(input));
console.log(kadanes(input));
