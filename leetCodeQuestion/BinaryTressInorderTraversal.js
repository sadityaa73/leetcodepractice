//WAP To Binary Tree Inorder Traversal;
//Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

//creating a node ;

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var root = null;
function printInoredrTraversal(node) {
  if (node === null) {
    return;
  }

  printInoredrTraversal(node.left);
  console.log(node.data + " ");
  printInoredrTraversal(node.right);
  return;
}
function implementingTree() {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  printInoredrTraversal(root);
}

implementingTree();
