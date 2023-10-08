/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (left, right) => {
  // code goes here

  // Create a new array
  const merged = [];

  // Loop through both arrays
  while (left.length && right.length) {
    // Find the lower value
    if (left[0] < right[0]) {
      // Add the lower value to the new array
      merged.push(left.shift());
    } else {
      // Add the lower value to the new array
      merged.push(right.shift());
    }
  }

  // Return the new array
  return [...merged, ...left, ...right];
};

const mergeSort = (nums) => {
  // Base case
  if (nums.length < 2) return nums;

  // Find the middle index
  const middle = Math.floor(nums.length / 2);

  // Split the array into two
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // Recursively sort the two arrays
  return merge(mergeSort(left), mergeSort(right));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
