// time complexity = O(n log n) - best, avg
//                   O(n^2) - worst
// space complexity = O(log n)
// in order to implement quick sort you need a pivot helper function function that designates a pivot,
// then it arranges elements in the array on either side of the pivot
// so that all values less than the pivot are moved to the left and all values greater than the pivot are moved to the right of it
// the helper should do it in place and should not make a new array
// when complete the helper should return the index of the pivot
// ideally, the pivot should be chose so that it's roughly the median value in the data set

/**
 * pivot pseudocode
 * accept three args: an array, a start index, and an end index
 * store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * loop through the arr from start to end,
 *   - if the pivot is greater than the curr el, increment the pivot index and then swap the current element with the element
 * swap the starting element (i.e the pivot) with the pivot index
 * return the pivot index
 */

const pivot = (arr: number[], start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
};

// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]));

/**
 * QuickSort Pseudocode
 * call the pivot helper on the array. When the pivot func returns the updated pivot index,
 * recursively call the pivot func on the sub arr to the left of the index and the sub arr to the right
 * the base of the recursion is when you consider a subarray with less than 2 elements
 */
const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
console.log(quickSort([9, 4, 8, -2, -3, 2, 1, 5, 7, 6, 3]));

/**
 * Sorting Exercise - pivot helper
In this exercise, your goal is to implement a function called pivot . This function contains nearly all of the logic you'll need in order to implement Quick Sort.
The pivot  function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.
 */
const pivot2 = (
  arr: number[],
  comparator?: any,
  start = 0,
  end = arr.length - 1
) => {
  // Use the first element as the pivot
  let pivotValue = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    // Use the comparator if provided, otherwise use default comparison
    if (comparator) {
      if (comparator(arr[i], pivotValue) < 0) {
        swapIndex++;
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      }
    } else {
      if (arr[i] < pivotValue) {
        swapIndex++;
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      }
    }
  }

  // Swap the pivot element to its correct position
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
};

// Example usage:
const arr = [4, 2, 5, 3, 6];
console.log(pivot2(arr)); // 2
console.log(arr); // [3, 2, 4, 5, 6]
