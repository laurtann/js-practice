class HashTable {
  constructor(size){
    this.data = new Array(size);
  }


  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currBucket = this.data[address];
    if (currBucket) {
      for (let item of currBucket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }
}

// memory space
const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'));