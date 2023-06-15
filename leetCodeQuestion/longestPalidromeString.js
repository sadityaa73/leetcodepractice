//WAP To Find Longest Palidrome String;
//Example:
// Input:
// S = "aaaabbaa"
// Output: aabbaa
// Explanation: The longest Palindromic
// substring is "aabbaa".

let string = "aaaabbaa"

function longestPalidromeString(string)
{
    let tempString = string;
    let reverseStr ="";
    let i=0;
    while(i<string.length)
    {
        reverseStr = tempString.split("");
        reverseStr = reverseStr.reverse();
        reverseStr = reverseStr.join("");
        console.log("reverseStr",reverseStr);
        console.log("printing tempString",tempString);
        if(reverseStr !== tempString)
        {
       tempString = tempString.slice(0,-1);
       i++;
       }else{
        return tempString;
       }
        
    }
    return null;
}

console.log("longest Palidrome String:-",longestPalidromeString(string));