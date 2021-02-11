// 1--> 10 --> 99 --> 5 --> 16

// // structure
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: { //pointer to another object
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currNode = this.head;
    while (currNode !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      return this.append(value);
    }
    const leader = this.traverseToIndex(index - 1);
    // save original next
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currNode = this.head;
    while (counter !== index) {
      currNode = currNode.next;
      counter++
    }
    return currNode;
  }

  remove(index) {
    const nodeBefore = this.traverseToIndex(index - 1);
    const nodeAfter = this.traverseToIndex(index + 1);
    nodeBefore.next = nodeAfter;
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    // while there is a next, second points to first: switches pointers
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(4);
// myLinkedList.reverse();
console.log(myLinkedList.printList());
// console.log(myLinkedList);