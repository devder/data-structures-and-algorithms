// A linked list is a data structure that contains head, tail and length property.
// Linked Lists consists of nodes, and each node has a value and a pointer to another Node or null
/**
 * Singly Linked List
 * - Do not have indexes
 * - Connected via nodes with a next pointer
 * - Random access is not allowed, must traverse from the beginning (head) to find a node
 * - However, Linked List is good at insertion and deletion
 * - 12(head) -> 15 -> 16 -> 25(tail)
 */

const stringify = (val) => {
  console.log(JSON.stringify(val, null, 2));
};
const log = (val) => {
  console.log(val);
};

class Node {
  next: Node | null = null;
  constructor(public val: any) {}
}

class SinglyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  length: number = 0;
  constructor() {}

  // add to end
  push(val: any) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove the last node
  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // remove the first node
  shift() {
    if (!this.head) return null;
    const current = this.head;
    if (!current.next) {
      this.tail = null;
    }

    this.head = current.next;
    current.next = null;
    this.length--;
    return current;
  }

  // add to the begin
  unShift(val: any) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // get a node at an index
  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  // change the value at an index
  set(index: number, val: any) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // put a node at a specific index
  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unShift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    const nodeAtIndexBefore = this.get(index - 1);
    newNode.next = nodeAtIndexBefore.next;
    nodeAtIndexBefore.next = newNode;
    this.length++;
    return this;
  }

  // remove an item from an index
  remove(index: any) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();

    const prev = this.get(index - 1);
    prev.next = prev.next.next;
    this.length--;
    return true;
  }

  // reverse the linked list in place
  // [1 -> 2 -> 3 -> 4]
  // [4 -> 3 -> 2 -> 1]
  reverse() {
    console.log("this >", this);
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

const l1 = new SinglyLinkedList();
l1.push("one");
l1.push("two");
l1.push("three");
// log(l1.shift());
// log(l1.unShift("one"));
// log(l1.get(0));
// log(l1.set(2, 12));
// l1.set(1, "zero");
// log(l1.get(1));
// stringify(l1.insert(3, "bool"));
// log(l1.remove(1));
// stringify(l1.reverse());
l1.reverse();
