/**
 * ### Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- ex: write a function called sumZero which accepts a SORTED array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

function sumZero(arr: number[]) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];

    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      // -3 + 5 > 0
      rightPointer--; // move the right pointer closer to the beginning of the array
    } else {
      // -5 + -1
      leftPointer++; // move the left pointer further down the array
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 12, 22, 30, 10]));

// - ex: countUniqueValues accepts a SORTED array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr: number[]) {
  if (arr.length == 0) return 0;

  let left = 0;
  let right = 1;

  // move the right index towards the end of the array
  // when it finds a number that differs, move the left index one step forward and replace
  // the value at the right index with the value at the new left index

  while (right < arr.length) {
    const first = arr[left];
    const second = arr[right];

    if (first != second) {
      left++;
      arr[left] = second;
    }

    right++;
  }

  return ++left;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
