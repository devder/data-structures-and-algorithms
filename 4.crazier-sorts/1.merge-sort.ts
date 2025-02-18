// merge sort works by taking an array and splitting it in halves until we have arrays of one element each
// then we keep comparing and merging the values in the array till we have one array back

// in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays and return one sorted array
// this function should be 0(n + m) time and space and the input arrays should be sorted in the same way - DESC or ASC

//  pseudo code
// - create an empty array, take a look at the smallest values in each input array
// - while there are still values we have not looked at
//  - if the val in the 1st array is smaller than the val in the second,
//    push the value in the first and move on to the next value in the first array
//  - if the val in the 2nd array is smaller than the val in the first,
//    push the value in the second and move on to the next value in the second array
//  - if there's no more values in one array, push the remaining values in the other array

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

console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 7, 8, 9, 10, 15]));
