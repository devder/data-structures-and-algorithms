// two main ways to traverse a tree - BFS and DFS
class BstNode {
  left: BstNode;
  right: BstNode;
  constructor(public value: number) {}
}

class BinarySearchTree {
  root: BstNode;
  constructor() {}

  insert(val: number): BinarySearchTree | undefined {
    const newNode = new BstNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;

      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val: number): BstNode | undefined {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (val === current.value) return current;
      current = val < current.value ? current.left : current.right;
    }
    return undefined;
  }

  // search nodes from left to right
  BFS() {
    let node = this.root;
    const data = [];
    const queue = [node];

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //       10
  //    6     15
  //  3   8       20
  // [10, 6, 3, 8, 15, 20]
  DFSPreOrder() {
    if (this.root) return [];
    const data = [];

    function traverse(node: BstNode) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    // const arr =  Array()

    5 - 4 + 1;

    traverse(this.root);
    return data;
  }

  //       10
  //    6     15
  //  3   8       20
  // [3, 8, 6, 20, 15, 10]
  DFSPostOrder() {
    if (this.root) return [];
    const data = [];

    function traverse(node: BstNode) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(this.root);
    return data;
  }
}

// Node -> name
// File(Node) -> content: string, read(), write()
// Directory(Node) -> children: Map, addChild(n:Node), getChild(n:str), removeChild(n:str)
// FS -> root, createFile(n, c:str), readFile(p:str), updateFile(p, v:str), delete(p:str), mkDir(p:str), ls(p:str)

class Node {
  createdAt: Date;
  updatedAt: Date;
  constructor(public name: string) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

class File extends Node {
  constructor(public name: string, public content = "") {
    super(name);
  }

  read() {
    return this.content;
  }

  write(newContent: string) {
    this.content = newContent;
    this.updatedAt = new Date();
    return this.content;
  }
}

class Directory extends Node {
  children: Map<string, any>;
  constructor(public name: string) {
    super(name);
    this.children = new Map();
  }

  addChild(node: Node) {
    if (this.children.has(node.name)) {
      throw new Error(`Entry already ${node.name} exists`);
    }
    this.children.set(node.name, node);
  }

  getChild(name: string) {
    if (!this.children.has(name)) {
      throw new Error(" not found");
    }
    return this.children.get(name);
  }

  removeChild(name: string) {
    if (!this.children.has(name)) {
      throw new Error(" not found");
    }
    this.children.delete(name);
  }
}

class FileSystem {
  root: Directory;
  constructor() {
    this.root = new Directory("/");
  }

  #traverse = (path: string) => {
    if (path === "/") {
      return { parent: this.root, name: path };
    }

    const paths = path.split("/");
    let current = this.root;

    for (let i = 1; i < paths.length - 1; i++) {
      current = current.getChild(paths[i]);
      if (!current || !(current instanceof Directory)) {
        throw new Error(
          `${paths.slice(0, i + 1).join("/")} is not a directory`
        );
      }
    }

    return { parent: current, name: paths[paths.length - 1] };
  };

  createFile(path: string, content = "") {
    const { parent, name } = this.#traverse(path);
    const file = new File(name, content);
    parent.addChild(file);
  }

  readFile(path: string) {
    const { parent, name } = this.#traverse(path);
    const node = parent.getChild(name);
    if (!(node instanceof File)) {
      throw new Error(`File ${path} does not exist`);
    }
    return node.read();
  }

  updateFile(path: string, newContent: string) {
    const { parent, name } = this.#traverse(path);
    const node = parent.getChild(name);
    if (!(node instanceof File)) {
      throw new Error(`File ${path} does not exist`);
    }
    node.write(newContent);
  }

  delete(path: string) {
    if (path == "/") {
      throw new Error("You cannot delete your home dir :) ");
    }
    const { parent, name } = this.#traverse(path);
    parent.removeChild(name);
  }

  ls(path: string) {
    const { parent, name } = this.#traverse(path);
    let node = parent;
    if (name !== "/") {
      node = parent.getChild(name);
      if (!node) {
        ("Path does not exist");
      }
    }
    if (node instanceof File) {
      return [node.name];
    }
    return [...node.children.keys()];
  }

  mkDir(path: string) {
    if (path === "/") {
      throw new Error("cannot create another home directory");
    }
    const { parent, name } = this.#traverse(path);
    const node = new Directory(name);
    parent.addChild(node);
  }
}
