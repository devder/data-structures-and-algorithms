/**
 * ### Divide and Conquer

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. Must be used on a sorted array
- This pattern can tremendously decrease time complexity.
- ex: using a function named search that takes an array and a value and returns the index where the value is located in the array. If the value is not found, the function returns -1.
 */

function search(arr: number[], n: number) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // find the middle index
    let currentChar = arr[middle]; // get the middle character

    if (currentChar > n) {
      // if the middle character is greater than the value
      max = middle - 1;
    } else if (currentChar < n) {
      // if the middle character is less than the value
      min = middle + 1;
    } else {
      return middle; // found the value
    }
  }

  return -1; // not found
}
