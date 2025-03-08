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
}

const l1 = new SinglyLinkedList();
l1.push("one");
l1.push("two");
l1.push("three");
console.log(l1.pop());
