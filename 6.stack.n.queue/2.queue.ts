class Node {
  next: Node;
  constructor(public value: any) {}
}

class Queue {
  first: Node;
  last: Node;
  size = 0;
  constructor() {}

  // Add to the end O(1)
  enqueue(val: any) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // Remove from the beginning O(1)
  dequeue() {
    if (!this.first) return null;
    const oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.value;
  }
}
