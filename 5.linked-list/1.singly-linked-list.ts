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
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove the last node
  pop() {
    if (!this.head) return undefined;
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
    if (!this.head) return undefined;
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
}

const l1 = new SinglyLinkedList();
// l1.push("two");
// l1.push("three");
// console.log(l1.shift());
console.log(l1.unShift("one"));
