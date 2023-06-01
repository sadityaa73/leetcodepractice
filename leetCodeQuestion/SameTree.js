//WAP To Given the roots of two binary trees p and q, write a function to check if they are the same or not.

//Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

//Example:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

//creating a tree node;


//Creating Tree Node:
class Node{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

var root = null;

function printTree(node)
{
    let result = [];

    function traverseTreeInPreOrder(node)
    {
        if(node===null)return;
       
        result.push(node.data);
        traverseTreeInPreOrder(node.left);
        traverseTreeInPreOrder(node.right);
    }

    traverseTreeInPreOrder(node);
    return result;
}

function TraverseTree1(node)
{
    let result=[];

    function TraverseTree(node)
    {
        if(node === null)
        return;

        result.push(node.data);
        TraverseTree(node.left);
        TraverseTree(node.right);
    }

   TraverseTree(node)

    return result;
}

function TraverseTree2(node)
{
    let result=[];

    function TraverseTree(node)
    {
        if(node === null)
        return;

        result.push(node.data);
        TraverseTree(node.left);
        TraverseTree(node.right);
    }

   TraverseTree(node)

    return result;
}

function checkTree(tree1,tree2)
{
     if(tree1.length != tree2.length)
     return false;
     
     for(let i=0;i<tree1.length;i++)
     {
        if(tree1[i] !== tree2[i])
        {
            return false;
        }
     }
}

function buildTree()
{
    let root1 = new Node(1);
    let root2 =new Node(1);
    root1.left=new Node(2);
    root1.right = new Node(1)
    root2.left=new Node(null);
    root2.right = new Node(2);
    console.log("check Tree is Identical or Not:-",checkTree(TraverseTree1(root1),TraverseTree2(root2)));
}

buildTree();