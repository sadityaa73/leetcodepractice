class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var root = null;

function printTree(root) {
  let result = [];

  function traverseTree(root) {
    if (root === null) {
      return;
    }

    result.push(root.val);
    traverseTree(root.left);
    traverseTree(root.right);
  }
  traverseTree(root);
  return result;
}

//check weather tree is same or not:
function sameTree(root1, root2) {
  let result = true;

  if(root1 === null && root2 === null){
      if(root1 === root2)
      {return result = true;}}
  function checkTree(root1,root2)
  {

      if(root1 ===null && root2===null)return ;
      if(root1 ===null || root2===null)return result = false;
      if(root1?.val !== root2?.val)
      {
          return result;
      }

      if(!root1.val && root2?.val)
      {
          result = false;
          return result;
      }
       if(root1.val && !root2?.val)
      {
          result = false;
          return result;
      }
      
      if(root1?.left !== undefined && root2?.left!== undefined)
      {
          checkTree(root1?.left,root2?.left);
      } else if (!root1?.left && root2?.left) {
          return result = false;
      } else if (root1?.left && !root2?.left) {
          return result = false;
      }

      if(root1?.right !== undefined && root2?.right!== undefined)
      {
           checkTree(root1?.right,root2?.right);
      } else if (!root1?.right && root2?.right) {
          return result = false;
      } else if (root1?.right && !root2?.right) {
          return result = false;
      }

      checkTree(root1?.left,root2?.left);
      checkTree(root1?.right,root2?.right);
      return result;
  }
  return checkTree(root1,root2)
}

// implementing tree
function buildTree() {
  let root = new Node(null);
//   root.left = new Node(2);
//   root.right = new Node(1);

  let root2 = new Node(null);
//   root2.left = new Node(1);
//   root2.right = new Node(2);
  console.log("printing Tree", printTree(root));
  console.log("printing Tree 2", printTree(root2));
  console.log("check tree weather its same or not:-", sameTree(root, root2));
}

buildTree();
