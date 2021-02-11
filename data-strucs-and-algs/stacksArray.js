class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value){
    this.array.push(value);
  }

  pop(){
    this.array.pop();
  }

  isEmpty() {
    if (this.array.length === 0) {
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
// myStack.pop();
console.log(myStack.peek());
console.log(myStack);

//Discord
//Udemy
//google
