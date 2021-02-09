// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++){
      if(nums[i] !== 0){
          nums[count++] = nums[i];
      }
  }

  for (let i = count; i < nums.length; i++){
      nums[i] = 0;
  }
};