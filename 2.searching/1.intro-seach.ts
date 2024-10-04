function linearSearch(arr: any[], v: any) {
  for (let i = 0; i < arr.length; i++) {
    if (v == arr[i]) return i;
  }

  return -1;
}

// sorted array
function binarySearch(arr: number[], v: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleChar = arr[middle];

    if (middleChar > v) {
      // if the middle character is greater than the value
      right = middle - 1;
    } else if (middleChar < v) {
      // if the middle character is less than the value
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 200));
