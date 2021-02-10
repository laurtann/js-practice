// create a doubly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  // O(1)
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
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

  // O(n)
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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

  // O(n)
  remove(index) {
    const nodeBefore = this.traverseToIndex(index - 1);
    if (index === this.length - 1) {
      nodeBefore.next = null;
    } else {
      const nodeAfter = this.traverseToIndex(index + 1);
      nodeBefore.next = nodeAfter;
      nodeAfter.prev = nodeBefore;
    }
    this.length--;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.remove(4);
console.log(myLinkedList.printList());
// console.log(myLinkedList);

