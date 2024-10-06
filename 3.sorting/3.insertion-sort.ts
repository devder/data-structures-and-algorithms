/**
 * - start by picking the second element in the array
 * - now compare the second element with the one and swap if necessary
 * - continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ie the left aside)
 *   to place the element in the correct place
 */

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Example usage:
const sortedArray = insertionSort([4, 2, 7, 1, 3]);
console.log(sortedArray); // Output: [1, 2, 3, 4, 7]
