//WAP to move elements of an array to the left by one position:
// inuput array = arr =[1,2,3,4,5,6];
// output array = arr =[2,3,4,5,6,1];

let arr = [1, 2, 3, 4, 5, 6];

function moveElement(k){
    let temp;
    let n = arr.length-1;
    console.log("@@printing array before ",arr);
    for(let i = 0 ;i<k;i++){
        temp =arr[0];
        console.log("@@temp",temp);
        for(let j = 0;j<n;j++){
            arr[j] = arr[j+1];
        }
        arr[n%10]=temp;
    }
    console.log("@@printing array after move element by pos 1 to the left",arr);
}
moveElement(2);


