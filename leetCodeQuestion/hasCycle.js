//WAP To Find Linked List Cycle Exsist:

//Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//Example:
// Input: head = [3,2,0,-4], pos = 1
// Output: true:

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNodes(val) {
    let node = new Node(val);
    let currentNode;

    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size++;
    }
  }

  printLinkedList() {
    let currentNode = this.head;
    let string = "";

    while (currentNode) {
      string += currentNode.data + "->";
      if (currentNode.next === null) {
        string += "NULL";
      }
      currentNode = currentNode.next;
    }
    return string;
  }
}
function printLinkedList(head) {
  let currentNode = head;
  let string = "";

  while (currentNode) {
    string += currentNode.data;
    if (currentNode.next != null) {
      string += "->";
    }
    currentNode = currentNode.next;
  }
  return string;
}

function detectCycle(head) {
    let currentNode = head;
  let fast = head;
  let slow = head;
console.log("printing head",fast.next);
  while (currentNode.next!=null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

function buildList() {
  //   let ll = new LinkedList();
  //   ll.addNodes(1);
  //   ll.addNodes(2);
  let node = new Node(1);
  node.next = new Node(2);
  node.next.next = new Node(3);
  node.next.next.next = new Node(node);
  console.log("printing linked list", printLinkedList(node));

  console.log("check linked list has cycle or not:-", detectCycle(node));
}

buildList();
