const moveZeros = (nums) => {
  let anchor = 0;
  let runner = 0;

  while (runner < nums.length) {
    if (nums[runner] !== 0) {
      // let temp = nums[runner];
      // nums[runner] = nums[anchor];
      // nums[anchor] = temp;
      // swapping elements in array
      [nums[anchor], nums[runner]] = [nums[runner], nums[anchor]];
      anchor += 1;
    }
    runner += 1;
  }
  return nums;
};

// [1, 2, 7, 0, 0, 0]
const input = [1, 0, 2, 0, 0, 7];
console.log(moveZeros(input));

// Alternate solution
function moveZero(nums) {
  let i = 0;
  for (let n of nums) {
    if (n !== 0) {
      nums[i] = n;
      i++;
    }
  }

  // fill the rest with zero
  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}
