/**
 * Frequency Counters

- This pattern uses objects or sets to collect values/frequencies of values
- ex: write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
- in this case, nested loops would be a bad solution, as it would be O(n^2). Instead, we can use frequency counters to solve this in O(n) time.
- We can use an object to store the frequency of each value in the first array, and then compare it to the frequency of the squared values in the second array.
 */

function same(arr1: Array<number>, arr2: number[]) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1: Record<number, number> = {};
  const frequencyCounter2: Record<number, number> = {};

  // first array
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // second array
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // check if the squared values of arr1 occur the same number of times in arr1
  for (const key in frequencyCounter1) {
    const sqdVal = (+key) ** 2;
    if (frequencyCounter2[sqdVal] != frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const res = same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(res);
