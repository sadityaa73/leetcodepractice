//WAP to find the given string is isomorphic or not:

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may 
// map to the same character, but a character may map to itself.

//example:
// Input: s = "egg", t = "add"
// Output: true;

let s = "foo",t="bar";
function isIsomorphic(str1,str2)
{
    if(str1.length != str2.length)return false;
    let map = new Map();
    for(let i=0;i<str1.length;i++)
    {
        if(!map.has(str1[i]) && !getKey(map,str2[i]))
        {
            map.set(`${str1[i]}`,str2[i]);
        }
    }
    function getKey(map,searchValue)
    {
        for(let [key,value] of map.entries())
        {
            if(value === searchValue)
            {
                return key;
            }
        }
    }
    for(let j=0;j<str2.length;j++)
    {
        if(getKey(map,str2[j])!== str1[j])
        {
            return false;
        }
    }
    return true;
}

console.log("isIsomorphic:-",isIsomorphic(s,t));