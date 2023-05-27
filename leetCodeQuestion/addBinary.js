//WAP To Add Binary;

//Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "1010", b = "1011"
// Output: "10101"

let a = "0";
let b = "0";

function addBinary(string1, string2) {
  let final = "";
  // we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number;
  final = BigInt(`0b${string1}`) + BigInt(`0b${string2}`);
  // sum is converted back to string using toString(2), here 2 is radix argument, so toString(2) converts to binary;
  final = final.toString(2);
  return final;
}

console.log("result", addBinary(a, b));
