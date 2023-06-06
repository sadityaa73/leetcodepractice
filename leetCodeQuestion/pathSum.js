// WAP To Find Path Sum of the Binary search tree:

// Given the root of a binary tree and an integer targetSum, return true
//  if the tree has a root-to-leaf path such that adding up all the values along the path
//  equals targetSum.

// A leaf is a node with no children.

//example:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

//creating tree node:
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//printint tree;

function printTree(root) {
  let result = [];

  function traverseTree(root) {
    if (!root) return;

    result.push(root.val);
    traverseTree(root.left);
    traverseTree(root.right);
  }
  traverseTree(root);
  return result;
}

//path sum of the binary tree:

var PathSum = function (root, targetSum) {
  let output = false;
  const loop = (tree, value) => {
    if (tree?.val || tree?.val === 0) tree.val += value;

    if (!tree?.left && !tree?.right && tree?.val === targetSum) {
      output = true;
    }

    if (tree?.left) {
      loop(tree.left, tree.val);
    }
    if (tree?.right) {
      loop(tree.right, tree.val);
    }
  };

  loop(root, 0);

  return output;
};

//builtTree;

function builtTree() {
  let targetSum = 7;
  let root = new Node(1);
  root.left = new Node(3);
  root.left.left = new Node(3);
  
  console.log("printing tree", printTree(root));

  console.log("check pathSum", PathSum(root, targetSum));
}
//calling main function:

builtTree();
