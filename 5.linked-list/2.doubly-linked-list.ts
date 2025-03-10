// A linked list is a data structure that contains head, tail and length property.
// Linked Lists consists of nodes, and each node has a value and a pointer to another Node or null
/**
 * DoublyLinkedList
 * ATTR
 * - Almost identical to a SinglyLinkedList just that it has a pointer to the node before
 * - It is more flexible than a singly linked list bc is has a prev and next pointer but it consumes more memory
 */

const stringify = (val) => {
  console.log(JSON.stringify(val, null, 2));
};
const log = (val) => {
  console.log(val);
};

class Node {
  prev: Node | null = null;
  next: Node | null = null;
  constructor(public val: any) {}
}

class DoublyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  length = 0;
  constructor() {}

  push(val: any) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let node = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      node.prev.next = null;
      this.tail = node.prev;
      node.prev = null;
    }
    this.length--;
    return node;
  }
}

const l2 = new DoublyLinkedList();
l2.push("one");
l2.push("two");
// l2.push("three");
// l2.push("four");

log(l2.pop());
log(l2);
