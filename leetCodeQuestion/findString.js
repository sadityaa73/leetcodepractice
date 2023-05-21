//WAP To Find the Index of the First Occurrence in a String:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

let haystack = "hello";
let needle = "ll";
// function findString(haystack, needle) {
//     let i = haystack.length-1;
//  let tempString = haystack;
//  while (0 < i) {
//    if (needle === tempString) {
//      let value = needle.slice(0,1);
//      console.log("@@@@value",value);
//      let ans =tempString.indexOf(value);
//      return ans;
//    }
//    tempString = tempString.slice(0, -1);
//    console.log("@@tempString",tempString);
//    i--;
//  }
//  return -1;
// };
function findString(haystack,needle){
    let ans = haystack.indexOf(needle);
    return ans;
}
console.log(findString(haystack,needle));
