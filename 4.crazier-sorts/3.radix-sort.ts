/**
 * time complexity = O(nk) - best, avg, worst
 * space complexity = O(n+k)
 * other sorting algorithms work by doing comparisons but radix sort is different. It only works on lists of numbers.
 * It never makes comparisons between elements but exploits the fact that information information about the size of a number is encoded in the number of digits
 * It arranges numbers based on their lengths - 1, 22, 333, 4444... n
 */
// Helper method getDigit(num, pos), returns the digit in a position in a number (from the back, assuming it's base 10)

const getDigit = (num: number, i: number) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// helper method digitCount(num), returns the number of digits in a given number

const digitCount = (num: number) => {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(digitCount(2393488489494044949494949494949));

// helper method mostDigits, returns the number of digits in the largest number in the list

const mostDigits = (nums: number[]) => {
  let val = 1;
  for (let i = 0; i < nums.length; i++) {
    val = Math.max(val, digitCount(nums[i]));
  }
  return val;
};

/**
 * Pseudocode for radix sort
 * figure out how many digits the largest number has, loop from k=0 up to thus largest number of digits, for each iteration of the loop
 * create buckets for each digit (0-9), place each number in the corresponding bucket based on its kth digit
 */
const radixSort = (nums: number[]) => {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      const dig = getDigit(nums[j], i);
      digitBuckets[dig].push(nums[j]);
    }
    nums = ([] as number[]).concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
