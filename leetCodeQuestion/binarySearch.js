//WAP To Find the position of element at index;

// Given a sorted array of size N and an integer K, find the position(0-based indexing) at which K 
// is present in the array using binary search.

//Example:
// Input:
// N = 5
// arr[] = {1 2 3 4 5} 
// K = 4
// Output: 3
// Explanation: 4 appears at index 3.

let arr=[1 ,5 ,7 ,9 ,10 ,11 ,15 ,17 ,19 ,22 ,23 ,24 ,26 ,27
     ,28 ,31 ,33 ,34 ,35 ,38 ,41 ,42 ,43 ,46 ,47 ,48 ,50 ,51 ,52
     ,53 ,54 ,56 ,57 ,58 ,59 ,60 ,61 ,62 ,64 ,65 ,66 ,67 ,69 ,72 
     ,75 ,77 ,79 ,80 ,81 ,82 ,85 ,87 ,88 ,89 ,92 ,93 ,94 ,96 ,97 
     ,98 ,100]
let k=57;
let n=61;
function binarySearch(arr,n,k)
{
    let start =arr[0];
    let end = n-1;
    function search(arr,start,end)
    {
        console.log("array",arr);
        if(start > end) return -1;

        let mid = Math.round((start+end)/2);
        console.log("mid",arr[mid]);
        if(arr[mid]===k)
        {
            return mid;
        }   
        if(k<arr[mid])
        {
            console.log("called else if block");
            return search(arr,start,mid-1);
        }
        if(k>arr[mid]){
            console.log("called else block");
            return search(arr,mid+1,end);
        }
        return -1;
    }
    return search(arr,start,end);
}

console.log("index at:-",binarySearch(arr,n,k));