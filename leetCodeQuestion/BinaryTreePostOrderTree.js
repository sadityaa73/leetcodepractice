//WAP To Binary PostOrder Tree :

//WAP To Binary Tree Preorder Traversal:

//Given the root of a binary tree, return the preorder traversal of its nodes' values.
//Example:
// Input: root = [1,null,2,3]
// Output: [1,2,3];


//Creating A tree node:

class Node{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


//building tree:

function buildTree(arr,start,end)
{
    if(start > end)
    {
        return null;
    }

    let mid = parseInt((start+end)/2);

    let root = new Node(arr[mid]);

    root.left = buildTree(arr,start,mid-1);
    root.right = buildTree(arr,mid+1,end);

    return root;
}

//print tree in InorderTraversal:

function printPostOrderTarversal(root)
{
    let result = [];

    function TreeTraversal(root)
    {
        if(root === null)return ;

        TreeTraversal(root.left);
        TreeTraversal(root.right);
        result.push(root.val)
    }
    TreeTraversal(root);
    return result;
}

//implimenting tree;

function Tree()
{
    let arr =[1,null,2,3];
    let start =0,end=arr.length-1;

    let root = buildTree(arr,start,end);

    console.log("print tree in PreOrder",printPostOrderTarversal(root));
}

//calling main function
Tree();