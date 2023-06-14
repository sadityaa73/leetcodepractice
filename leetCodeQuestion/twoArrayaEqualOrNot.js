//WAP To Find Two ARRAY Equal Or NOt;

//Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements,
// arrangements (or permutation) of elements may be different though.

//Example:
// Input:
// N = 5
// A[] = {1,2,5,4,0}
// B[] = {2,4,5,0,1}
// Output: 1
// Explanation: Both the array can be
// rearranged to {0,1,2,4,5};

let arr1 = [8 ,9 ,7 ,5 ,3 ,1];
let arr2 = [5 ,4 ,2 ,5 ,1 ,7];
let n = 5;

function checkArray(A, B, n) {

    if(A.length != B.length)return false;
  let arrA = A.sort();
  let arrB = B.sort();

  for (let i = 0 ; i < n ; i++) {
        if (arrA[i] != arrB[i]) 
            return false}
  return true;
}

console.log("is Same:-", checkArray(arr1, arr2, n));
