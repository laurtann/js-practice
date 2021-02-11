class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // getter
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length ++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // add the data to the one next to it
      this.data[i] === this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length --;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(1);

console.log(newArray);