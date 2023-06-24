//wap to remove linked list element;

//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
//example:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);
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
  }

  printLinkedList() {
    let current = this.head;
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
}

function removingElement(head, value) {
  let current = head;
  let previous = null;

  if (!current || !current.next) return;
  while (current) {
    if (current.data === value) {
      previous.next = current.next;

      removingElement(head, value);
    }
    previous = current;
    current = current.next;
  }
  return head;
}

function buildList() {
  let ll = new LinkedList();
  ll.add(1);
  ll.add(2);
  ll.add(3);
  ll.add(4);
  ll.add(3);
  ll.add(6);
  ll.add(3);

  console.log("remove elements",removingElement(ll.head, 3));

//   console.log(
//     "print linked list after removing given value:-",
//     ll.printLinkedList()
//   );
}

buildList();
