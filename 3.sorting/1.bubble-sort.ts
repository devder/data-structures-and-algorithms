/**
 * - start looping with a variable called i, at the end of the array towards the beginning
 * - start inner loop with a variable called j, from the beginning until i - 1
 * - if arr[j] is greater than arr[j + 1], swap those two values
 */

// ES5
function bubbleSort1(arr: number[]) {
  let noSwaps = false;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break; // for a list that is almost sorted, we can break out if there were no swaps after an iteration
  }
  return arr;
}

// ES6
const bubbleSort = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
