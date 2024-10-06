## Sorting

- Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
- sorting is a fundamental problem in computer science, it is commonly used in a wide variety of applications and we need to know how it works.
- There are many different ways to sort things and many different algorithms to do so
- The JavaScript built-in sort() method without passing in a comparator .sort(fn) sorts an element and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
- The time complexity of the built-in sort method is O(n log n) in the best and average cases, and O(n^2) in the worst case.
- when using the comparator,
  - if we return a negative number, a should come before b,
  - if we return a positive number, b should come before a,
  - and if we return 0, a and b are the same as far as the sort is concerned.

```javascript
// Built-in sort method
const arr = [6, 4, 15, 10];
arr.sort(); // [10, 15, 4, 6]

// Built-in sort method with a comparator
const arr = [6, 4, 15, 10];
function numberCompare(num1, num2) {
  return num1 - num2;
}
arr.sort(numberCompare); // [4, 6, 10, 15]
```

### Bubble Sort

- A sorting algorithm where the largest values bubble up to the top.
- it is not commonly used
- it works by repeatedly swapping the adjacent elements if they are in the wrong order.
- Time complexity: O(n^2)
- Works well when the data is nearly sorted

### Selection Sort

- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
- Time complexity: O(n^2)
- Works well when memory space is a concern

### Insertion Sort

- Builds up the sort by gradually creating a larger left half which is always sorted.
- Time complexity: O(n^2)
- Works well when numbers are added to a list one at a time
