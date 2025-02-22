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

const pivot = (arr: number[]) => {
  const pivot = arr[0];
  let swapIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[0], arr[swapIndex]] = [arr[swapIndex], arr[0]];
  return swapIndex;
};

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
