class Node {
  next: Node | null = null;
  constructor(public val: any) {}
}

class Stack {
  first: Node | null = null;
  last: Node | null = null;
  size = 0;
  constructor() {}

  // add to the beginning, O(1)
  push(val: any) {
    const newNode = new Node(val);
    if (this.size == 0) {
      // if there is nothing in the list, make first and last = new val
      this.first = newNode;
      this.last = newNode;
    } else {
      // else, make last = new val
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // remove from the beginning, O(1)
  pop() {
    if (!this.first) return null;
    const oldFirst = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.val;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
// console.log(stack.pop());
console.log(stack);

const arr = new Array().fill(100);
