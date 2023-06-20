//WAP To Find Number of ones in the binary  representation:

//Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

//Example:
//Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

function decimalToBinary(n) {
  let decimal = n;
  let base = 2;
  let result = [];
  let ans = [];
  let count = 0;
  while (decimal > 0) {
    result = decimal / base;
    ans.push(decimal % base);
    decimal = Math.trunc(result);
  }

  if (ans.length !== 32) {
    for (let i = 0; i <= 32; i++) {
      if (i > ans.length) {
        ans.push(0);
      }
    }
  }
  ans.reverse();
  for (let j = 0; j <= 32; j++) {
    if (ans[j] === 1) {
      count++;
    }
  }
  return count;
}

console.log("number of once in binary representation:-", decimalToBinary(11));
