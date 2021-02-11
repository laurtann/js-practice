//given arr, return first recurring char
//if none, return undefined
//assume that arr always contains ints
function firstRecurChar(arr) { // O(n)
  let charObj = {};
  for (let char of arr) {
    if (charObj[char]) {
      return char;
    }
    charObj[char] = true;
  }
  return undefined;
}

console.log(firstRecurChar([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurChar([2,3,4,5]));
console.log(firstRecurChar([2,5,5,2,3,5,1,2,4]));