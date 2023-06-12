//WAP To Find Intersection Point Of The Linked List:

// Given the heads of two singly linked-lists headA and headB, return the
// node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

//Example:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
// , skipA = 2, skipB = 3
// Output: Intersected at '8'

//creating a list node:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size++;
    }
  }
  printList() {
    let currentNode = this.head;
    let string = "";

    while (currentNode) {
      string += currentNode.val;
      currentNode = currentNode.next;
    }
    return string;
  }
}

function CreateLinkedlist(arr) {
  let list = new LinkedList();

  for (let i = 0; i < arr.length; i++) {
    list.addNode(arr[i]);
  }
  return list;
}

//check the interseciton point of the linked list:

function intersectionPoint(list1, list2) {

  if(list1 === null || list2 === null)return "printing null";
 
  console.log("list1",list1,"and list2",list2);
  let a = list1;
  let b= list2;

  while(a != b)
  {
    if(a === null)
    {
      a = list2;
    }else{
      a = a.next;
    }
    if(b === null)
    {
      b = list1;
    }else{
      b = b.next;
    }
  }
   return " printing null";
}

function driverFunction() {
  let arr1 = [4, 1, 8, 4, 5];
  let arr2 = [5, 6, 1, 8, 4, 5];

  let list1 = CreateLinkedlist(arr1);
  let list2 = CreateLinkedlist(arr2);

  console.log("printing intersection point of the linked list:-",intersectionPoint(list1.head,list2.head));
}

//calling driving function:
driverFunction();
