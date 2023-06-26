// WAP To reversed a linked list:
// Given the head of a singly linked list, reverse the list,
//  and return the reversed list.

//example:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1];

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

  addNode(val) {
    let node = new Node(val);
    let current;

    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
}

//build linked list:

function buildLinkedList(arr) {
  let List = new LinkedList();

  for (let i = 0; i < arr.length; i++) {
    List.addNode(arr[i]);
  }
  return List.head;
}

//reversed a linked list:

function reversedList(head) {
  let reversedLinkedList = new LinkedList();
  let current = head;
  let reversed = [];
  while (current) {
    reversed.push(current.data);
    current = current.next;
  }
  reversed.reverse();
  for (let i = 0; i < reversed.length; i++) {
    reversedLinkedList.addNode(reversed[i]);
  }
  return reversedLinkedList.head;
}

//second approach

function reversedLinkedListSecondApproach(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}
//print linked list;

function printList(head) {
  let current = head;
  let string = "";

  while (current) {
    string += current.data + "->";
    if (current.next === null) {
      string += "NULL";
    }
    current = current.next;
  }
  return string;
}
//driver code;

function driverCode() {
  let arr = [1, 2, 3, 4, 5];

  let List = buildLinkedList(arr);
  console.log("linked list:-", printList(List));
  console.log("reversed linked list:-", printList(reversedList(List)));
  console.log(
    "print reversed linked list by using 2nd approach:-",
    printList(reversedLinkedListSecondApproach(List))
  );
}

//calling driver code:

driverCode();
