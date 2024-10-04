// function loopFactorial(num: number) {
//   let total = 1;

//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }

//   return total;
// }

// function recursiveFactorial(num: number): number {
//   if (num <= 1) return 1;

//   return num * recursiveFactorial(num - 1);
// }

// function getMaxCallStackSize(): number {
//   try {
//     return 1 + getMaxCallStackSize();
//   } catch (e) {
//     return 1;
//   }
// }

function fib(n: number) {
  const arr = [1, 1];

  //  add the two numbers
  //  get the result of the addition
  //  push it to the array
  //  do it n - 1 times

  for (let i = 1; i < n - 1; i++) {
    const item = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(item);
  }

  return arr[arr.length - 1];
}

function fib2(n: number) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function isPalindrome(str: string) {
  // add whatever parameters you deem necessary - good luck!

  // if the string is empty return true
  if (str.length <= 1) return true; // madam

  if (str[0] != str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}

/**
 *
 * a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false
 */
function someRecursive(arr: number[], fn: Function) {
  //  return false if the array is empty
  if (!arr.length) return false;

  //  return true if any value in arr returns true when passed to fn

  if (fn(arr[0])) return true;

  //  keep calling the function with the values in array until the array is empty

  return someRecursive(arr.slice(1), fn);
}

function flatten(arr: any[]): any[] {
  let result: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

/**
 * a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
function nestedEvenSum(obj: Record<any, any>) {
  // add whatever parameters you deem necessary - good luck!

  //  check if val is a number, if yh and is even then add it,
  //  if it is an object, then call nestedEvenSum on it

  let total = 0;

  for (const key in obj) {
    const val = obj[key];
    console.log("val >", val);
    if (typeof val == "number" && val % 2 === 0) {
      total += val;
    } else if (
      typeof val == "object" &&
      Object.getPrototypeOf(val) === Object.prototype
    ) {
      total += nestedEvenSum(val);
    }
  }

  return total;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

/**
 *
 * a function called stringifyNumbers which takes in an object
 * and finds all of the values which are numbers and converts them to strings.
 */

function stringifyNumbers(obj: Record<string, any>): Record<string, any> {
  const newObj: Record<string, any> = {};

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
