class Node {
  left: Node;
  right: Node;
  constructor(public value: number) {}
}

class BinarySearchTree {
  root: Node;
  constructor() {}

  // O(log n) - best/average case
  insert(val: number) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val == current.value) return undefined;

      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  // O(log n) - best/average case
  find(val: number) {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;

    while (true) {
      if (current.value == val) return current;

      if (val < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return undefined;
        }
      } else if (val > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return undefined;
        }
      }
    }
  }

  // optimized
  findSh(val: number): Node | undefined {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (val === current.value) return current;
      current = val < current.value ? current.left : current.right;
    }
    return undefined;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree.find(5)); // Node with value 5
console.log(tree.find(15)); // Node with value 15
console.log(tree.find(7)); // undefined
