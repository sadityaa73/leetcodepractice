//WAP to Find contains duplicate or not:
// Given an integer array nums, return true if any value appears at least twice in the array, and return 
// false if every element is distinct.

//Example:
// Input: nums = [1,2,3,1]
// Output: true

let array =[1,2,3,1];
function containsDuplicates(arr)
{
   let set = new Set(arr);
   return set.size != arr.length;
}

console.log("isContains Duplicates:-",containsDuplicates(array));