// merge two sorted arrays into one sorted array

function mergeSortedArrays(arr1, arr2) {
  let mergedArrayUnsorted = arr1.concat(arr2);
  let mergedArray = mergedArrayUnsorted.sort((a, b) => a - b);
  return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([0, 3, 4, 31], []));