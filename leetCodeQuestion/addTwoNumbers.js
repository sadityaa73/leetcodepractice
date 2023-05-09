//creating a node class;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

//creating a LinkedList;

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(value) {
    let node = new Node(value);
    let current;

    if (this.head === null) {
      this.head = node;
      this.size++;
      return;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printLinkedList() {
    let currentNode = this.head;
    let list = "";
    while (currentNode) {
      list += currentNode.data + "->";
      currentNode = currentNode.next;
      if (currentNode === null) {
        list += "NULL";
      }
    }
    return list;
  }
}
//funciton to rverse a linked list;
function reverse(LinkedList) {
  let current = LinkedList.head;
  let next = null;
  let previous = null;
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}
function addTwoNumbers(list1, list2) {
  console.log("printing ", list1, "and", list2);
  let l3 = new Linkedlist();
  let sum;
  let carry = 0;
  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    sum = Number(l1.data) + Number(l2.data) + carry;
    console.log("printing sum from 1st while", sum);
    carry = sum / 10;
    l3.addNode(Math.round(sum) % 10);
    this.size++;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    sum = l1.data + carry;
    console.log("printing sum from 2nd while", sum);
    carry = sum / 10;
    l3.addNode(Math.round(sum) % 10);
    this.size++;
    l1 = l1.next;
  }
  while (l2) {
    sum = l2.data + carry;
    console.log("printing sum from 3rd while", sum);
    carry = sum / 10;
    l3.addNode(Math.round(sum) % 10);
    this.size++;
    l2 = l2.next;
  }
  // if (carry) {
  //   sum = carry;
  //   carry = sum / 10;
  //   l3.addNode(Math.round(sum) % 10);
  //   this.size++;
  // }
  let current = l3.head;
  let l3_list = "";

  while (current) {
    l3_list += current.data + "->";
    current = current.next;
  }
  console.log("printing l3 list", l3_list);
  return l3;
}
//main function to implement Linked list;
function ImplementingLinkedList() {
  let l1 = new Linkedlist();
  let l2 = new Linkedlist();
  l1.addNode(2);
  l1.addNode(5);
  l1.addNode(3);
  console.log(l1.printLinkedList());
  l2.addNode(9);
  l2.addNode(2);
  console.log(l2.printLinkedList());
  let first = reverse(l1);
  let second = reverse(l2);
  console.log(addTwoNumbers(first, second));
}
ImplementingLinkedList();
