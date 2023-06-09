//WAP To Perform All Three Tree traversal Method:

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var root = null;

// Printing InOrder Tree Traversal;
function PrintInOrderTree(node) {
  let result = [];
  function InOrderTraversal(node) {
    if (node === null) {
      return;
    }

    InOrderTraversal(node.left);
    result.push(node.data);
    InOrderTraversal(node.right);
  }
  InOrderTraversal(node);
  return result;
}

//Print PostOrder Tree Traversal

function PrintPostOrderTree(node) {
  let result = [];
  function PostOrderTraversal(node) {
    if (node === null) {
      return;
    }

    PostOrderTraversal(node.right);
    PostOrderTraversal(node.left);
    result.push(node.data);
  }
  PostOrderTraversal(node);
  return result;
}

//Print PreOrder Tree Traversal;

function PrintPreOrderTree(node)
{
    let result = [];

    function PreOrderTraversal(node)
    {
        if(node === null)
       { return;
        }
        result.push(node.data);
        PreOrderTraversal(node.left);
        PreOrderTraversal(node.right);
    }
    PreOrderTraversal(node);
    return result;
}

function BuildTree() {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  console.log("print InOrder Tree:-", PrintInOrderTree(root));
  console.log("print PostOrder Tree:-", PrintPostOrderTree(root));
  console.log("print PreOrder Tree:-", PrintPreOrderTree(root));
}

BuildTree();
