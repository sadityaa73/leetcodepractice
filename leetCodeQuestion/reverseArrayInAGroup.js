//WAP To Find Revese Array In A group;
// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

// Note: If at any instance, there are no more subarrays of size greater than or equal to K,
// then reverse the last subarray (irrespective of its size).
//  You shouldn't return any array, modify the given array in-place.

//Example:
// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.

let arr = [36 ,93 ,64 ,48, 96, 55, 70 ,0 ,82 ,30, 16 
  ,22 ,38 ,53 ,19 ,50, 91 ,43 ,70 ,88 ,10 ,57 ,14, 94 
  ,13 ,36 ,59 ,32 ,54 ,58 ,18 ,82 ,67];
let n = arr.length;
let k = 13;
function subArray(arr, n, k) {
let reverseArr = [];
let result = [];
if (k > n) {
  reverseArr.push(...arr.reverse());
  return reverseArr;
} 
if (k < n)
{
  for (let i = 0; i < n; i += k) {
    let groups = arr.slice(i, i + k);
    reverseArr.push(groups.reverse());
  }
  for (let j = 0; j < reverseArr.length; j++) {
      for (let k = 0; k < reverseArr[j].length; k++) {
        result.push(reverseArr[j][k]);
      }
    }
    
}
return result;
}

console.log("reverse array:-", subArray(arr, n, k));
