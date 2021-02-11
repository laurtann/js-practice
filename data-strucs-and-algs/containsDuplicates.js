// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// O(n)
var containsDuplicate = function(nums) {
  let numObj = {};
  for (let num of nums) {
      if (numObj[num]) {
          return true;
      }

      numObj[num] = true;
  }
  return false;
};