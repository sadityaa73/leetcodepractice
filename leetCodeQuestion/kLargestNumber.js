//WAP To Find K Largest number:

// Given an array Arr of N positive integers and an integer K, find K largest elements from the array. 
//  The output elements should be printed in decreasing order.

//Example:
// Input:
// N = 5, K = 2
// Arr[] = {12, 5, 787, 1, 23}
// Output: 787 23
// Explanation: 1st largest element in the
// array is 787 and second largest is 23.

let arr =[12,5,787,1,23];
let n=5;
let k=2;

function largestNumber(arr,n,k)
{
    let largestNumber =[]
  let result = arr.sort(function(a, b){return b - a});
  for(i=0;i<k;i++)
  {
      largestNumber.push(result[i])
  }
  return largestNumber;
}

console.log("after sorting",largestNumber(arr,n,k));