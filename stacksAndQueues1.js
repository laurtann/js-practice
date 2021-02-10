
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value){
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // hold pointer
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.length++;
  }

  pop(){
    if (this.isEmpty()) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const oldTop = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  printList() {
    const array = [];
    let currNode = this.top;
    while (currNode !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(9);
myStack.push(8);
myStack.pop();
console.log(myStack.peek());
console.log(myStack.printList());




//Discord
//Udemy
//google
