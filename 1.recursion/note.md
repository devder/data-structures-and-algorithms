## Recursion

- A process (a function in our case) that calls itself

### Why use recursion?

- It's sometimes a cleaner way to solve a problem
- It's sometimes a more elegant way to solve a problem
- It's sometimes a more readable way to solve a problem
- e.g. `JSON.parse`/`JSON.stringify`, DOM traversal (document.getElementById), and tree data structures

### The Call Stack

- In almost all programming languages, there is a built-in data structure that manages what happens when functions are invoked, it's called the call stack

### How recursive functions work

- Invoke the same function with a different input until you reach your base case
- Base case: the condition when the recursion ends, which must return sth. very important to avoid infinite loops
- two essential parts of a recursive function: base case and different input

### what is the max call stack size

- The max call stack size is the maximum number of function calls that can be placed on the call stack before the stack overflows
- The max call stack size is dependent on the programming language and the environment in which the code is executed
