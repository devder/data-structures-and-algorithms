### Linear Search

- **Linear Search** is a simple search algorithm that searches for a target value within an array. It sequentially checks each element of the array for the target value until a match is found or until all the elements have been searched.
- **Time Complexity**: O(n)

### Binary Search

- **Binary Search** is a much faster form of search. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time. It is divide and conquer algorithm.
- **Time Complexity**: O(log n) - log is in base 2
  - searching 16 items takes 4 steps: log(16) = 4, 2^4 = 16
  - searching 32 items takes 5 steps: log(32) = 5, 2^5 = 32
- **Pre-requisite**: The array must be sorted.
