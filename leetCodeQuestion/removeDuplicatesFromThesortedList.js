//WAP To Remove Duplicates from Sorted List;

//Given the head of a sorted linked list, delete all duplicates such that each element
//appears only once. Return the linked list sorted as well.

//Example:
//Input: head = [1,1,2]
//Output: [1,2]

//creating a list

class Node {
  constructor(val) {
    this.value = val;
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

  printLikedList() {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.value + "->";
      if (current.next === null) {
        string += "NUlL";
      }
      current = current.next;
    }
    return string;
  }
}

function removeDuplicates(head) {
  let current = head;

  while (current.next!=null) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}

function implementingLinkedList() {
  let ll1 = new LinkedList();
  ll1.addNodes(1);
  ll1.addNodes(1);
  ll1.addNodes(2);
  console.log("priting nodes",ll1.printLikedList());
  console.log(
    "after removieing duplicates from the sorted list",
    removeDuplicates(ll1.head)
  );
}

implementingLinkedList();
