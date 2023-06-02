// WAP To Find Maximum Depth Of The Binary Tree;



//creating node for the tree;
class Node{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;


// print whole binary tree;
function printTree(node)
{
    let output = [];
    function TraverseTree(node)
    {
        if(node ===null)return;

        output.push(node.val);
        TraverseTree(node.left);
        TraverseTree(node.right);
    }
    TraverseTree(node);
    return output;
}

//check depth;

function checkDepth(root)
{
    if(root === null)return 0;

    let leftDepth = checkDepth(root.left);
    let rightDepth = checkDepth(root.right);

    return Math.max(leftDepth,rightDepth)+1;
}

// Build Tree;

function BuildTree()
{
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);

    console.log("printing Binary Tree",printTree(root));
    console.log("printing max depth of the binary tree",checkDepth(root));
}

BuildTree();