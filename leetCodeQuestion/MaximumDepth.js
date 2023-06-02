// Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

//Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3.

//creating a tree node:

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var root = null;

function printTree(node) {
  let output = [];

  function TraverseTree(node) {
    if (node === null) return;

    output.push(node.val);
    TraverseTree(node.left);
    TraverseTree(node.right);
  }
  TraverseTree(node);
  return output;
}

//max depth:

function checkDepth(root) {
  let leftDepth = [];
  let rightDepth = [];
  
  function leftTraverseTree(root) {
    if (root === null) {
      return;
    }
    if(root?.left === undefined && root?.right !== null)
    {
        leftDepth.push(root?.left?.right.val);
    }
    console.log("printing root from checkDepth in leftDepth", root);
    leftDepth.push(root.val);
    leftTraverseTree(root.left);
  }

  function rightTraverseTree(root) {
    if (root === null) {
      return;
    }
    if(root?.right === undefined && root?.left !== null)
    {
        leftDepth.push(root?.left.val);
    }
    console.log("printing root from checkDepth in leftDepth", root);
    rightDepth.push(root.val);
    rightTraverseTree(root.right);
  }

  leftTraverseTree(root);
  rightTraverseTree(root);

  console.log("right Depth", rightDepth);
  console.log("leftDepth", leftDepth);

  if (rightDepth.length > leftDepth.length) {
    return rightDepth.length;
  } else {
    return leftDepth.length;
  }
}

//BuildTree:

function BuildTree() {
  let root = new Node(-8);
  root.left = new Node(3);
  root.right = new Node(0);
  root.left.left = new Node(-8);
  root.right.right = new Node(-1);
  root.right.right.right = new Node(8)
  console.log("printing tree", printTree(root));
  console.log("printing Max depth of the tree", checkDepth(root));
}

BuildTree();
