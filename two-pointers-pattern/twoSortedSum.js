const twoSortedSum = (arr, target) => {
  // Initialize the pointers
  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const sum = arr[start] + arr[end];

    if (sum === target) {
      return [start, end];
    } else if (sum > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return [];
};

const input = [2, 3, 4, 5, 8, 11, 18];
const target = 8;

console.log(twoSortedSum(input, target));
