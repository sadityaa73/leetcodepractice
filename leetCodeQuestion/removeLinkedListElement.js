//wap to remove linked list element;

//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
//example:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

//creating a node for the linked list;
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//creating a linked list;
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(val) {
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
    let current = this.head;
    let string = "";

    while (current) {
      string += current.val + "->";
      if (current.next === null) {
        string += "NULL";
      }
      current = current.next;
    }
    return string;
  }
}

// build a linked list:

function buildLinkedList(input) {
  let LL = new LinkedList();
  for (let i = 0; i < input.length; i++) {
    LL.addNode(input[i]);
  }
  return LL.head;
}

//remove elements from the linked list:

function removeElements(head, value) {
  let temp;
  let current;
  if (head === null) return head;
  if (head.val === value) {
    temp = head.next;
    head = temp;
    removeElements(head, value);
  } else {
    current = head;
    while (current.next != null) {
      if (current.next.val === value) {
        temp = current.next;
        current.next = current.next.next;
        removeElements(temp, value);
      } else {
        current = current.next;
      }
    }
    let newCurrent = head;
    return newCurrent;
  }
}
//print linked list:

function printLinkedList(head) {
  console.log("printng head in printlinkedlist",head);
  if(head=== null)return null;
  let current = head;
  let string = "";

  while (current) {
    string += current.val + "->";
    if (current.next === null) {
      string += "NULL";
    }
    current = current.next;
  }
  return string;
}

//driver function:

function driverCode() {
  let array = [7, 7, 7, 7, 7, 7];

  let Linkedlist = buildLinkedList(array);

  console.log("print linked list:-", printLinkedList(Linkedlist));

  console.log(
    "print linked list after removeing:-",
    printLinkedList(removeElements(Linkedlist, 7))
  );
}

//calling driver function:

driverCode();
