const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move el to first pos
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort if num smaller than that to its left.
      // ** this is what makes insertion sort O(n) sometimes
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[j] <= array[j - 1] && array[i] < array[j]) {
            // move el to correct posn
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
