// Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.


// Example:
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.

let arr =[142, 112 ,54, 69 ,148 ,45, 63 ,158 ,38 ,60 ,124 ,142 ,130 ,179 ,117 ,36 ,191 ,43 ,89 ,107 
    ,41 ,143, 65, 49 ,47 ,6, 91 ,130, 171 ,151 ,7 ,102 ,194 ,149 ,30 ,24 ,85 ,155, 157 ,41, 167, 177 ,132 ,109 ,145 ,40 ,27 ,124 ,138 ,139 ,119 ,83 ,130 
    ,142 ,34 ,116 ,40 ,59 ,105 ,131 ,178 ,107 ,74, 187, 22 ,146,125, 73 ,71 ,30,178 ,174,98,113];
let n = 74;
let s = 665;

function subArray(arr,n,s)
{   
    let sum=0;
    let result =[];
    for (let i = 0; i < n; i++) {
       for(let j=i;j< n;j++)
       {
        sum += arr[j];
        if(sum === s)
        {
            result.push(i+1,j+1);
            return result;
        }
       }
       sum =0;
    }
    return -1;
}

console.log("sum of subArray:-",subArray(arr,n,s));