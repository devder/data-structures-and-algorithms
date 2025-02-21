// merge sort works by taking an array and splitting it in halves until we have arrays of one element each
// then we keep comparing and merging the values in the array till we have one array back
/**
 * time complexity = O(n log n)
 * space complexity = O(n)
 * if there are 8 items, the split is done 3, if there are 32 items, the splitting is done 5
 * which is 2 ^ 3 and 2 ^ 5 respectively and that translates to log n
 * the comparison is done n times for each split so it's n log n time complexity - O(n log n)
 * O(n log n) is the best time complexity for comparison based sorting algorithms
 */

// in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays and return one sorted array
// this function should be 0(n + m) time and space and the input arrays should be sorted in the same way - DESC or ASC

/**
 *  merge pseudo code
 *  joins two sorted arrays
 */
// - create an empty array, take a look at the smallest values in each input array
// - while there are still values we have not looked at
//  - if the val in the 1st array is smaller than the val in the second,
//    push the value in the first and move on to the next value in the first array
//  - if the val in the 2nd array is smaller than the val in the first,
//    push the value in the second and move on to the next value in the second array
//  - if there's no more values in one array, push the remaining values in the other array

// console.log(merge2([1, 3, 5, 7, 9], [2, 4, 6, 7, 8, 9, 10, 15]));

const merge = (arr1: number[], arr2: number[]): number[] => {
  let i = 0;
  let j = 0;
  const result: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

// console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 7, 8, 9, 10, 15]));

/**
 * mergeSort pseudo code
 */
// break up the array into halves until you have arrays that are empty or have one element
// once you have the smaller sorted arrays, merge those arrays with other sorted arrays until you are back
// at the full length of the array

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
};

// console.log(mergeSort([15, 13, 12, 1, 11, 15, 19, 4, 5, 6]));
