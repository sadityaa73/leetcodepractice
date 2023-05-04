//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var nums=[3,2,4];
var target =6;
 var newArray =[];
function arrayCheck(nums,target){
    let array=[...nums];
   for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        console.log("printing i and j",i ,"",j);
           let sum = array[i]+ array[j];
           if(sum === target){
            newArray.push(i,j);
           }
    }
   }
    console.log(array);
    console.log("printing target",target);
    console.log("priting new Array",newArray);
}

arrayCheck(nums,target);