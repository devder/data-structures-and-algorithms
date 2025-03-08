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
}
