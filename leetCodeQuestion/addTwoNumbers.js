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
  console.log("After reversing the linked-list");
    while(previous!=null){
        reversedList += previous.element + "->";
        previous =previous.next;
        if(previous === null){
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
  }
  checkSize() {
    console.log("printing size", this.size);
  }
}
//implimenting likedlist:-
function implimentingLinkedList() {
  let LL1 = new LinkedList();

  LL1.addNodes(2);
  LL1.addNodes(3);
  LL1.addNodes(4);
  LL1.addNodes(6);
  LL1.addNodes(8);
  LL1.checkSize();
  LL1.printLinkedList();
  LL1.reverseLinkedList();
}
implimentingLinkedList();
