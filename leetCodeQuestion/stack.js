//wap to show stack implemenation:

class Stack {
  constructor() {
    this.arr = new Array(3);
    this.size = 0;
  }
  Push(val) {
    if (this.arr.length !== this.size) {
      this.arr[this.size] = val;
      this.size++;
    } else {
      console.log("stack is full");
    }
  }
  Pop() {
    this.arr.pop();
  }
  Top() {
    if (this.size !== 0) {
      let top = this.arr[this.size - 1];
      console.log("top:-",top);
    } else {
      return "stack is empty";
    }
  }
  isEmpty() {
    if (this.size === 0 ) {
      return true;
    } else {
      return false;
    }
  }
  printStack() {
    if (this.size === 0) {
      console.log("stack is empty");
    } else {
      for (let i = 0; i < this.size; i++) {
        console.log(this.arr[i]);
      }
    }
  }
}

function stackImplimentation() {
  let stack = new Stack();
  stack.Push(1);
  stack.Push(4);
  stack.Push(33);
  stack.printStack();
  stack.Top();
 console.log("isEmpty",stack.isEmpty());
}

//calling driver function:

stackImplimentation();
