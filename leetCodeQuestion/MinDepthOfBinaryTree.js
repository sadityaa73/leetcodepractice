//WAP To Find Min Depth Of Binary Tree:

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

//Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2


//creating tree node:

class Node{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// print tree:

function printTree(root)
{
    let result =[];

    function traverseTree(root)
    {
        if(root === null)return;

        
        traverseTree(root.left);
        result.push(root.val);
        traverseTree(root.right);
    }
    traverseTree(root);
    return result;
}

//find min depth of the binary tree;

function minDepth(root)
{
   if(!root)return 0;

   if(!root.left && !root.right)return 1;

   if(root.left === null )return 1+ minDepth(root.right);

   if(root.right === null) return 1+ minDepth(root.left);

   let leftMinDepth = minDepth(root.left);
   let rightMinDepth = minDepth(root.right);

   return Math.min(leftMinDepth,rightMinDepth)+1;
}

//impliment tree:

function tree()
{
   let root = new Node(2);
   root.right = new Node(3);
   root.right.right = new Node(4);
   root.right.right.right = new Node(5);
   root.right.right.right.right = new Node(6);
    console.log("print tree",printTree(root));

    console.log("minimum depth of the Tree:-",minDepth(root));
}

//calling main function:

tree();