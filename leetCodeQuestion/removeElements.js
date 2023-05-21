//WAP to remove duplcates in the current array;

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// let nums = [3,2,2,3];
let nums =[2];

function removeElements(val){
    let count =0;
    for(let i=0;i<nums.length-1;++i){
        if(nums[i]!=val){
            nums[count] = nums[i];
            ++count;
        }
    }
    return count;
}

console.log("@@count",removeElements(3));