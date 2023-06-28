//wap to find that given array contains duplicate:

//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
//such that nums[i] == nums[j] and abs(i - j) <= k.

//Example:
// Input: nums = [1,2,3,1], k = 3
// Output: true.

let nums = [1,2,3,1,2,3],
  k = 2;

function containsDuplicates(nums, k) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

//calling funciton:
console.log("is containing duplicates:-", containsDuplicates(nums, k));
