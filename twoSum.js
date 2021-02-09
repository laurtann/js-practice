// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// works, but O(n^2)
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// little faster, O(n)
const twoSum2 = function(nums, target) {
  let ansObj = {}

  for (let i = 0; i < nums.length; i++) {
      ansObj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
      if (ansObj[target - nums[i]]) {
          return [ansObj[target - nums[i]], i];
      }
  }
}