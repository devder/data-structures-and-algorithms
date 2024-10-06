// store the first element as the smallest value you've seen so far
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, designate that number's position to be the the new min and continue to the end of the array
// if the min is not the index you initially began with, swap the two vals
// repeat this with the next element until the array is sorted

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }

    if (smallestIndex != i) {
      // swap
      const temp = arr[smallestIndex];
      arr[smallestIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}
