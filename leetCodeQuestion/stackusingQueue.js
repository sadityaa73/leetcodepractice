class Queue {
  constructor() {
    this.arr = new Array();
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }
  Push(val) {
    this.arr[this.size] = val;
    this.size++;
    this.rear++;
  }
  Pop() {
    if (this.size === 0) {
      console.log("stack is empty");
    } else {
      this.arr.splice(0,1);
      this.size--;
      this.rear--;
    }
  }
  Top() {
    if (this.size !== 0) {
      console.log("top:-", this.arr[this.rear-1]);
    } else {
      console.log("satck is empty");
    }
  }
  Empty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

//implimenting stack using queue:

function stackUsingQueue()
{
    let stack = new Queue();
    stack.Push(1);
    stack.Push(34);
    stack.Push(23);
    console.log("stack",stack.arr);
    stack.Top();
    stack.Pop();
    console.log("stack",stack.arr);
    stack.Top();
    stack.Push(55);
    stack.Top();
    console.log("stack",stack.arr);
    stack.Pop();
    stack.Pop();
    stack.Pop();
    stack.Top();
}

//calling driver code:

stackUsingQueue();