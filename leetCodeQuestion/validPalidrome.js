//WAP To Find That It Is A Valid Palidrome Or Not:
//A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

//Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let input = "Race A Car";
function isPalidrome(string) {
  let finalString = string.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
  let reverseString = "";
  for (let reverse = finalString.length - 1; reverse >= 0; reverse--) {
    reverseString += finalString[reverse];
  }
  if (finalString === reverseString) return true;
  return false;
}

console.log("palindrome or not:-", isPalidrome(input));
