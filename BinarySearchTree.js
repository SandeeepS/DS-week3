class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        console.log(this.root);
    }
}

let bst = new BinarySearchTree();
bst.isEmpty();
