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
  let charIndexMap: Record<string, number> = {}; // Object to store the index of characters
  let maxLength = 0; // Store the length of the longest substring
  let left = 0; // Start of the sliding window

  // Iterate through the string
  for (let right = 0; right < str.length; right++) {
    let currentChar = str[right];

    // If character is already in the object and within the current window
    if (charIndexMap[currentChar] >= left) {
      // Move the left pointer to the right of the last occurrence
      left += 1;
    }

    // Update the character's latest index
    charIndexMap[currentChar] = right;

    // Calculate the current window length and update maxLength
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(findLongestSubstring("abcabcbb")); // Expected output: 3
console.log(findLongestSubstring("abcdef")); // Expected output: 6
console.log(findLongestSubstring("bbbbb")); // Expected output: 1
console.log(findLongestSubstring("pwwkew")); // Expected output: 3
console.log(findLongestSubstring("")); // Expected output: 0
console.log(findLongestSubstring("a b c a b c"));
