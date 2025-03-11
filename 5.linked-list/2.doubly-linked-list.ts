// A linked list is a data structure that contains head, tail and length property.
// Linked Lists consists of nodes, and each node has a value and a pointer to another Node or null
/**
 * DoublyLinkedList
 * ATTR
 * - Almost identical to a SinglyLinkedList just that it has a pointer to the node before
 * - It is more flexible than a singly linked list bc is has a prev and next pointer but it consumes more memory
 */

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

  // remove from the beginning
  shift() {
    if (!this.head) return undefined;
    const node = this.head;
    if (!node.next) {
      this.tail = null;
    } else {
      node.next.prev = null;
    }

    this.head = node.next;
    node.next = null;
    this.length--;
    return node;
  }

  // add to the begin
  unshift(val: any) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      oldHead.prev = newNode;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    const startFromFront = index <= this.length / 2;
    // [1 -> 2 -> 3]
    let current: Node;
    if (startFromFront) {
      current = this.head;
      for (let i = 1; i <= index; i++) {
        current = current.next;
      }
    } else {
      console.log("other");
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
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
}

const l2 = new DoublyLinkedList();
l2.push("one");
l2.push("two");
l2.push("three");
l2.push("four");

l2.set(3, "fab");
log(l2);
