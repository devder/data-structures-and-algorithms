/**
 * ### Sliding Window O(n)

- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.
- Example: Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
- Example2: Write a function that checks the longest substring with distinct characters named findLongestSubstring
 */

function maxSubArraySum(arr: number[], consecutiveNum: number) {
  let foundMaxSum = 0;
  let tempSum = 0;

  // if the consecutive num is larger than the length of the array then quit
  if (arr.length < consecutiveNum) return null;

  // firstly sum together the first consecutiveNum digits
  for (let i = 0; i < consecutiveNum; i++) {
    foundMaxSum += arr[i];
  }

  tempSum = foundMaxSum;

  // start checking from the index of the consecutive num to the right
  // subtract the first number and add the next number

  for (let j = consecutiveNum; j < arr.length; j++) {
    tempSum = tempSum - arr[j - consecutiveNum] + arr[j];
    foundMaxSum = Math.max(tempSum, foundMaxSum);
  }

  return foundMaxSum;
}

function findLongestSubstring(str: string) {
  if (!str.length) return 0;

  // store the temp longest value
  let foundMax = 0;
}

// Test cases
console.log(findLongestSubstring("abcabcbb")); // Expected output: 3
console.log(findLongestSubstring("abcdef")); // Expected output: 6
console.log(findLongestSubstring("bbbbb")); // Expected output: 1
console.log(findLongestSubstring("pwwkew")); // Expected output: 3
console.log(findLongestSubstring("")); // Expected output: 0
console.log(findLongestSubstring("a b c a b c"));
