// Given 2 arrays, create func that lets user know (T/F) whether the two arrs contain any common items
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// if i did two nested for loops, then O(n^2)
// if I were to make an obj, that will be linear O(n)
// loop arr1, assign to obj then loop over arr2 to see if it exists within obj O(n)

function commonItems(arr1, arr2) {
  let itemObj = {};
  arr1.forEach(item => {
    itemObj[item] = true;
  });

  for (let item of arr2) {
    if (itemObj[item]) {
      return true;
    }
  }
  return false;
}

console.log(commonItems(array1, array2)); // O(n)


