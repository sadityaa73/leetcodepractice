// WAP To Majority Element In The Linked List:

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You 
// may assume that the majority element always exists in the array.

//Example:
// Input: nums = [3,2,3]
// Output: 3;

let arr = [3,2,3];
let count=0;
function checkMajority(arr)
{   
    let map = new Map();
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j]===arr[i])
            {
                count ++;
            }
        }
        map.set(`${arr[i]}`,count);
        count =0;
    }
    function getByValue(map, searchValue) {
        for (let [key, value] of map.entries()) {
          if (value === searchValue)
            return key;
        }
      }
    let majority = getByValue(map,Math.max(...map.values()));
    return majority;
}

console.log("majority element:-",checkMajority(arr));