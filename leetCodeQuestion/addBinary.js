//WAP To Add Binary;

//Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "1010", b = "1011"
// Output: "10101"

let a = "1010";
let b = "1011";

function addBinary(string1, string2) {
  let sum = 0;
  let carry = 0;
  let result = "";
  let final = "";
  let i = 0;
  let j = 0;

  let a = "";
  let b = "";

  for (let count1 = string1.length-1; count1 >= 0; count1--) {
    a += string1[count1];
  }
  for (let count2 = string2.length-1; count2 >= 0; count2--) {
    b += string2[count2];
  }
 console.log("a",a,"b",b);
  while (i < a.length && j < b.length) {
    console.log("first while called");
    sum = Number(a[i]) + Number(b[j]) + carry;
    if (sum >= 2) {
      carry = 1;
      sum = 0;
    } else if (sum < 2 && sum > 0) {
      carry = 0;
      sum = 1;
    }
    result += sum.toString();
    i++;
    j++;
  }
  while (i < a.length) {
    console.log(" second while called");
    sum = Number(a[i]) + carry;
    if (sum >= 2) {
      sum = 0;
      carry = 1;
    } else if (sum < 2 && sum > 0) {
      sum = 1;
      carry = 0;
    }
    result += sum.toString();
    i++;
  }
  while (j < b.length) {
    console.log(" third while called");
    sum = Number(b[j]) + carry;
    if (sum >= 2) {
      sum = 0;
      carry = 1;
    } else if (sum < 2 && sum >= 0) {
      sum = 1;
      carry = 0;
    }
    result += sum.toString();
    j++;
  }
  if (carry) {
    console.log("if seciton called");
    sum = carry;
    result += sum.toString();
  }
  for (let k = result.length - 1; k >= 0; k--) {
    final += result[k];
  }
  return final;
}

console.log("result", addBinary(a, b));
