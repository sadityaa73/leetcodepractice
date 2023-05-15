//WAP to merge two sorted list;

//creating a node ;

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

//creating a linked list:

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
      return;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  printList() {
    let current = this.head;
    let list = "";

    while (current) {
      list += current.value + "->";
      current = current.next;
      if (current === null) {
        list += "NULL";
      }
    }
    return list;
  }
}
function mergeList(ll1, ll2) {
  let ll3 = new LinkedList();
  let first = ll1.head;
  let second = ll2.head;
  let listArray = [];
  let temp;
  while (first) {
    listArray.push(first.value);
    if (first.next === null) {
      while (second) {
        listArray.push(second.value);
        second = second.next;
      }
    }
    first = first.next;
  }
  for (let i = 0; i < listArray.length - 1; i++) {
    if (listArray[i] > listArray[i + 1]) {
      temp = listArray[i];
      listArray[i] = listArray[i + 1];
      listArray[i + 1] = temp;
    }
  }
  //putting all the elemnets of the array  into the new linked list one by one:
  listArray.forEach((element)=>{
    ll3.addNode(element);
  })
  return ll3.printList();
}
//implementing linked list

function linkedList() {
  let ll1 = new LinkedList();
  let ll2 = new LinkedList();
  ll1.addNode(2);
  ll1.addNode(1);
  ll2.addNode(1);
  ll2.addNode(4);
  console.log("printing linked list", ll1.printList());
  console.log("printing linked list", ll2.printList());
  console.log("printing merge and arraenged list", mergeList(ll1, ll2));
}
linkedList();
