// WAP To Find Length of Last Word;

// example:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

let string ="hello sir";

function findLastStringLength(string){
      let count =0;
      let tempString = string.trim();
    for(let i=0;i<string.length;++i){
        if(tempString[i]===" "){
            count = i+1;
        }
    }
    let ans = tempString.length-count;
    return ans;
}
console.log(findLastStringLength(string));