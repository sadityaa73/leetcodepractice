var mySet = new Set();
function initaliseSet(){
    // initialze number in the set from 1 to 1000.
    for (let i=1;i<=1000;i++){
         mySet.add(i);
    }
    console.log("printing my set value",mySet);
}

function popSamllestInteger(){
    //    for(let i=0;i<mySet.length;i++){
    //         console.log("printing mySet",mySet[i]);
    //    }
   const loop = mySet[Symbol.iterator]();
   let min=1;
   mySet.forEach((elem)=>{
    if(min>elem){
       console.log("printing element value",elem);
    }
   })
   console.log("printing min value",min);
   mySet.delete(min);
   mySet.forEach((elem)=>{console.log(elem)})
}

function addback(num){
mySet.forEach((num)=>{if(mySet.has(num)!= true){
 console.log("printing elements after removeing sammalest integer",num);
}})
}
initaliseSet();
popSamllestInteger();
addback(1);
