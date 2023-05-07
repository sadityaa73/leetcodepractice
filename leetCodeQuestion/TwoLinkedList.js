//creating node ;

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//creating a linked list:

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //add node to the linked list:
  addNodes(element) {
    let node = new Node(element);
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
    let current = this.head;
    let list = "";

    while (current != null) {
      list += current.element + "->";
      current = current.next;
      if (current === null) {
        list += "NULL";
      }
    }
    return list;
  }
  //reverse a linklist;
  reversedLinkedList() {
    let next = null;
    let current = this.head;
    let previous = null;
    let reverseLinkdeList = "";
    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    while (previous != null) {
      reverseLinkdeList += previous.element;
      previous = previous.next;
    }
    return reverseLinkdeList;
  }
  checkSize() {
    return this.size;
  }
}

//add two numbers in the link list;

function addTwoLinkedList(ll1, ll2) {
  let l1 = reverseList(ll1);
  let l2 = reverseList(ll2);
  let ans = linkedList3(l1, l2);
  return printAnswerList(ans);
  
}

//reverse linklist to summing up the elemments:

function reverseList(LL) {
  let current = LL.head;
  let next = null;
  let previous = null;
  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

//answer linked list;
function linkedList3(ll1, ll2) {
  let l3 = new LinkedList();
  let sum;
  let carry = 0;
  while (ll1 && ll2) {
    sum = ll1.element + ll2.element + carry;
    carry = sum / 10;
    l3.addNodes(Math.round(sum) % 10);
    ll1 = ll1.next;
    ll2 = ll2.next;
  }
  while (ll1) {
    sum = ll1.element + carry;
    carry = sum / 10;
    l3.addNodes(Math.round(sum) % 10);
    ll1 = ll1.next;
  }
  while (ll2) {
    sum = ll2.element + carry;
    carry = sum / 10;
    l3.addNodes(Math.round(sum) % 10);
    ll2 = ll2.next;
  }
  return l3;
}

function printAnswerList(l3) {
  let current = l3.head;
  let list = "";

  while (current != null) {
    list += current.element;
    current = current.next;
  }
  return list;
}
//implimenting Linked list:

function implimentingLinkdeList() {
  let ll1 = new LinkedList();
  let ll2 = new LinkedList();
  ll1.addNodes(3);
  ll1.addNodes(4);
  ll1.printLinkedList();
  ll2.addNodes(5);
  ll2.addNodes(6);
  ll2.addNodes(7);
  ll2.printLinkedList();
  console.log("printing third answer linked list", addTwoLinkedList(ll1, ll2));
}
implimentingLinkdeList();
