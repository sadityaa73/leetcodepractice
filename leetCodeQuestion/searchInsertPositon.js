//WAP To Search Insert Position;

//Given a sorted array of distinct integers and a target value, return the index  
// if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Input: nums = [1,3,5,6,8], target = 5
// Output: 2


let nums = [1,3,5,6,8];
let target =0;
console.log(nums.length);
function searchPos(nums,target)
{
    let i=0;
    while(i<nums.length)
    {
        if(nums[i] === nums[0] && nums[0]>target){
            console.log("postion if the index",i);
            let ans = 0;
            return ans;
        }
        if(nums[i]===target){
            console.log("postion if the index",i);
            return i;
        }
        else if(nums[i]<target && nums[i+1]>target)
        {
            console.log("postion if the index",i);
            return i+1;
        }
        if(nums[i] === nums[nums.length] && nums[nums.length]<target){
            console.log("postion if the index",i);
            let ans = target-nums[nums.length]+nums.length;
            return ans;
        }
        i++;
    }
}
console.log("postion",searchPos(nums,target));