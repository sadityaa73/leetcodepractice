//creating node for the link list:
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
  //adding nodes to the linked list:
  addNodes(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //reverse linkedlist:
  reverseLinkedList() {
    let previous = null;
    let current = this.head;
    let next = null;
    let reversedList = "";
    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    while (previous != null) {
      reversedList += previous.element + "->";
      previous = previous.next;
      if (previous === null) {
        reversedList += "NULL";
      }
    }
    console.log(reversedList);
  }
  // print linklist:
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
    console.log(list);
    return list;
  }
  checkSize() {
    console.log("printing size of the first linked list:-", this.size);
    return this.size;
  }
  //converting linkedlist into array:
  LinkedListToArray(){
    let current = this.head;
    var array=[];
    while(current!=null){
        array.push(current.element);
        current = current.next;
    }
    return array;
  }
}

//creating linked list two:-

class LinkedList2 {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //adding node in the linked list:
  addNode(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //reverse a linklist:
  reverseLinkedList() {
    let previous = null;
    let current = this.head;
    let next = null;
    let reversedLinkList = "";
    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    while (previous != null) {
      reversedLinkList += previous.element + "->";
      previous = previous.next;
      if (previous === null) {
        reversedLinkList += "NULL";
      }
    }
    console.log(reversedLinkList);
  }
  //printing entire linked list:
  printingLinkedList() {
    let current = this.head;
    let linkedlist = "";
    while (current != null) {
      linkedlist += current.element + "->";
      if (current.next === null) {
        linkedlist += "NULL";
      }
      current = current.next;
    }
    console.log(linkedlist);
  }
  //printing the size of the link list;
  checkSize() {
    console.log("printing size of second linked list:-", this.size);
  }
}
//implimenting likedlist:-
function implimentingLinkedList() {
  let LL1 = new LinkedList();
  let LL2 = new LinkedList2();
  LL1.addNodes(2);
  LL1.addNodes(3);
  LL1.addNodes(4);
  LL1.addNodes(6);
  LL1.addNodes(8);
  LL1.checkSize();
  LL1.printLinkedList();
  console.log("after reversing the linked list:-");
  LL1.reverseLinkedList();
  console.log("printing array",LL1.LinkedListToArray());
  console.log("-------------linked -list second---------");
  LL2.addNode(1);
  LL2.addNode(5);
  LL2.addNode(2);
  LL2.addNode(7);
  LL2.addNode(9);
  LL2.printingLinkedList();
  console.log("after reversing the linked list:-");
  LL2.reverseLinkedList();
  LL2.checkSize();
}
implimentingLinkedList();