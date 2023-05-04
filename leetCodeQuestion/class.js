class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LikedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Add element into LikedList:
  add(element) {
    let node = new Node(element);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //insert at Tail in LinkedList:
  // insertAtHead() {}
  //delete node from the start:
  deleteHead() {
    let curr = this.head;
    console.log("printing current node from delete", curr);
    console.log("printing head from delete", this.head);
    if (curr.next === null) {
      curr.element = null;
      this.size--;
    } else {
      this.head = curr.next;
      this.size--;
    }
    console.log("printing head  after delete head node from delete", this.head);
  }
  //delete tail node:
  deleteTail() {
    let curr = this.head;
    console.log("printing node from delete Tail", curr);
    let prev;
    while (curr) {
      if (curr.next === null) {
        prev.next = null;
        this.size--;
      } else {
        prev = curr;
        console.log("printing the prev from delete from tail", prev);
      }
      curr = curr.next;
    }
  }
  //delete at particular index:
  deleteAtIndex(index) {
    console.log("size and index", this.size, "and", index);
    let curr = this.head;
    let prev;
    if (index < 0 || index > this.size) {
      console.log("please enter the valid index point for perform deletetion");
      return 0;
    }
    for (let i = 0; i < this.size; i++) {
      if(index > this.size){
        console.log("please enter the correct index");
      }
      if(index === 0){
        this.head = curr.next;
        this.size--;
        return;
      }
      if (index === i) {
        prev.next = curr.next;
        this.size--;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }
  //printing the size of linked list:
  sizeOfLL() {
    return console.log("printing size of linked list", this.size);
  }
  //print the entire Liked List:
  printLikedList() {
    let curr = this.head;
    let str = " ";
    while (curr) {
      str += curr.element + ", ";
      curr = curr.next;
    }
    console.log(str);
  }
}

function LL() {
  let ll1 = new LikedList();
  ll1.sizeOfLL();
  ll1.add(2);
  ll1.add(3);
  ll1.add(4);
  ll1.add(5);
  ll1.add(6);
  // ll1.deleteHead();
  // ll1.deleteTail();
  ll1.deleteAtIndex(0);
  ll1.printLikedList();
  ll1.deleteAtIndex(2);
  ll1.printLikedList();
  ll1.deleteAtIndex(1);
  ll1.printLikedList();
  ll1.deleteAtIndex(1);
  ll1.printLikedList();
  ll1.deleteAtIndex(0);
  ll1.printLikedList();
  ll1.sizeOfLL();
}
LL();
