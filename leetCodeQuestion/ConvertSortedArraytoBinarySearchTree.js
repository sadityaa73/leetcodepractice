//WAP To Convert Sorted Array to Binary Search Tree.

//Given an integer array nums where the elements are sorted in ascending 
//order, convert it to a height-balanced binary search tree.

//Example:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

//creating a tree node;

class Node{
    constructor(val)
    {
        this.val=val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

//convert a sorted array into BST(Binary Search Tree);

function sortedArrayIntoBST(arr,start,end)
{
    if(start > end)return null;

    let mid = parseInt((start+end)/2);

    let node = new Node(arr[mid]);

    node.left = sortedArrayIntoBST(arr,start,mid-1);
    node.right = sortedArrayIntoBST(arr,mid+1,end);

    return node;
}

// print tree InOrder:

function printInOrder(node)
{
    let output=[];

    function traverseTree(node)
    {
         if(node === null)return ;

        
         traverseTree(node.left);
         output.push(node.val);
         traverseTree(node.right);
    }

    traverseTree(node);
    return output;
}

//print Tree in PreOrder:

function printPreOrder(node)
{
    let output=[];

    function traverseTree(node)
    {
         if(node === null)return ;

         output.push(node.val);
         traverseTree(node.left);
         traverseTree(node.right);
    }

    traverseTree(node);
    return output;
}

// print tree in postorder:

function printPostOrder(node)
{
    let output=[];

    function traverseTree(node)
    {
         if(node === null)return ;

         
         traverseTree(node.left);
         traverseTree(node.right);
         output.push(node.val);
    }

    traverseTree(node);
    return output;
}

//BuildTree

function buildTree()
{
   let array =[-10,-3,0,5,9];
   let start = 0;
   let end = array.length-1;

   let root = sortedArrayIntoBST(array,start,end);

   console.log("printing tree in InOrder after converting it from sorted array\n",printInOrder(root));
   console.log("printing tree in preOrder after converting it from sorted array\n",printPreOrder(root));
   console.log("printing tree in PostOrder after converting it from sorted array\n",printPostOrder(root));
}

buildTree();