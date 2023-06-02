//Symmetric Tree

//Given the root of a binary tree, check whether it is a mirror of 
//itself (i.e., symmetric around its center).

//Example:
//Input: root = [1,2,2,3,4,4,3]
//Output: true.


//creating tree node;

class Node{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function printTree(node)
{
     let tree =[];

     function traverseTree(node)
     {
        if(node === null)return;

        tree.push(node.val);
        traverseTree(node.left);
        traverseTree(node.right);
       
       
     }

     traverseTree(node);
     return tree;
}

//checkTree;

function isSymetric(node1, node2)
{
    if(node1 === null && node2 === null) return true;

    if(node1 !=null && node2!==null && node1.val === node2.val){
         return (isSymetric(node1.left,node2.right) && isSymetric(node1.right,node2.left));
    }
    return false;
}

//Build Tree;

function buildTree()
{
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(4);
    root.left.right = new Node(3);
    root.right.left = new Node(3);
    root.right.right = new Node(4);
    console.log("printing Tree",printTree(root));
    console.log("print isSymetric or NOt:-",isSymetric(root,root));
}

buildTree();