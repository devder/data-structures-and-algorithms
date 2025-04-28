/**
 * Frequency Counters O(n)

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

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

function findMaxLength(nums: number[]): number {
  const map = new Map<number, number>();
  map.set(0, -1); // Initialize with sum 0 at index -1
  let maxLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Treat 0 as -1
    sum += nums[i] === 0 ? -1 : 1;

    if (map.has(sum)) {
      // If the sum has been seen before, calculate the length of the subarray
      maxLength = Math.max(maxLength, i - map.get(sum));
    } else {
      // Otherwise, store the first occurrence of this sum
      map.set(sum, i);
    }
  }
  return maxLength;
}

function anagram(s: string, t: string) {
  if (s.length != t.length) return false;
  // create a map of the occurrences of each character in s by looping
  // check if they exist in character t

  const freq = new Map<string, number>();
  const freq2 = new Map<string, number>();
  for (const char of s) {
    let v = freq.get(char);
    freq.set(char, v ? ++v : 1);
  }

  for (const char of t) {
    let v = freq2.get(char);
    freq2.set(char, v ? ++v : 1);
  }

  for (const [k] of freq) {
    if (freq.get(k) != freq2.get(k)) {
      return false;
    }
  }

  return true;
}

function sortString(s: string) {
  return s.split("").sort().join("");
}

function groupAnagrams(strs: string[]): string[][] {
  // sort these strings, and make each unique key the key,
  const wordMap: Record<string, string[]> = {};
  const output = [];
  // and the value will be an array of similar words
  for (const str of strs) {
    const sorted = sortString(str);
    if (!wordMap[sorted]) {
      wordMap[sorted] = [str];
    } else {
      wordMap[sorted].push(str);
    }
  }
  // create an output and return the value of each unique keys
  for (const key in wordMap) {
    output.push(wordMap[key]);
  }
  return output;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(anagram("car", "car"));
