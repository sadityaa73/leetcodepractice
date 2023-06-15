//WAP To FindMissing Number:
//Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
//Example:
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

let arr=[2];
let n=1;

function missingNumber(arr,n)
{
    let tempArr = arr.sort(function(a,b){return a-b});
    if(tempArr[0]!= 1)return 1;
    for(let i=0;i<n;i++)
    {
        if(tempArr[i+1] != tempArr[i]+1)
        return tempArr[i]+1;
    }
}

console.log("missing number",missingNumber(arr,n));