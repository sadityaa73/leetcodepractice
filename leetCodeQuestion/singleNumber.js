//WAP To Return Number thet is not repeating inside the array:
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
//Example:
// Input: nums = [2,2,1]
// Output: 1;

let arr = [2, 2, 1];

function check(arr) {
  for (let i = 0; i < arr.length; i++) {
       let count = 0;
       let tempArr = arr[i];
       console.log("tempArr",tempArr);
       for (let j=0;j<arr.length;j++)
       {
           if(arr[j] === tempArr)
           {
              count ++;
           }
       }
       if(count <=1)
       {
         return tempArr;
       }
  }
}

console.log("printing non repeating number", check(arr));
