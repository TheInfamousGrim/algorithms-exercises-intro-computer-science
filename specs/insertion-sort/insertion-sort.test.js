/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // code goes here
  for (let i = 0; i < nums.length; i++) {
    // Get our number to insert
    let numberToInsert = nums[i];
    let j;

    // We will iterate down below the number to insert
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // We move the number up the array by 1
      nums[j + 1] = nums[j];
    }

    // We insert the number at the correct position where the for loop stopped
    nums[j + 1] = numberToInsert;
  }

  return nums;
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// i = 0
// number to insert = 10
// j = -1 so we don't iterate down
// [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

// i = 1
// number to insert = 5
// j = 0
// [10, 10, 3, 8, 2, 6, 4, 7, 9, 1]
// j = -1 so we don't iterate down
// [5, 10, 3, 8, 2, 6, 4, 7, 9, 1]

// i = 2
// number to insert = 3
// j = 1
// [5, 10, 10, 8, 2, 6, 4, 7, 9, 1]
// j = 0
// [5, 5, 10, 8, 2, 6, 4, 7, 9, 1]
// j = -1 so we don't iterate down
// [3, 5, 10, 8, 2, 6, 4, 7, 9, 1]

// i = 3
// number to insert = 8
// j = 2
// [3, 5, 10, 10, 2, 6, 4, 7, 9, 1]
// j = 1
// nums[j] = 5 which is not greater than 8 so we stop iterating down
// nums[2] = 8
// [3, 5, 8, 10, 2, 6, 4, 7, 9, 1]
