class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
            if (value === current.value) return undefined;
            if (value < current.value) {
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
    find(value) {
        if (!this.root) return null;
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
            if (!current) return undefined;
            if (value === current.value) return current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }
    contains(value) {
        if (!this.root) return null;
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
            if (!current) return false;
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(2);
binarySearchTree.insert(20);
binarySearchTree.insert(34);
binarySearchTree.insert(69);
binarySearchTree.insert(4);
binarySearchTree.find(4);
binarySearchTree.find(20);
binarySearchTree.find(123);
binarySearchTree.contains(6);
binarySearchTree.contains(123); 
