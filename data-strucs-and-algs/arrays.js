const strings = ['a', 'b', 'c', 'd'];
// 4 items, 16 bytes of storage

strings[2]; // lookup O(1)

strings.push('e'); // O(1)

strings.pop(); // O(1)

strings.unshift('z'); // O(n) - have to shift all elements

strings.splice(2, 0, 'middle'); // O(n/2) => O(n)
