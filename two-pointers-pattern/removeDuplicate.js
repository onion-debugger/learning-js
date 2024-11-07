const removeDuplicate = (arr) => {
  // initialize the pointers
  let start = 0;
  let end = 1;

  while (end < arr.length) {
    if (arr[start] !== arr[end]) {
      start += 1;
      arr[start] = arr[end];
    }
    end += 1;
  }
  return start + 1;
};

// sorted array
// must be done in-place as well
// [0, 0, 1, 1, 1, 2, 2]
const arr = [0, 0, 1, 1, 1, 2, 2];
console.log(removeDuplicate(arr));
console.log(removeDuplicate([1, 2, 3]));
console.log(removeDuplicate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
