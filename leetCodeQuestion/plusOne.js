//You are given a large integer represented as an integer array digits, where
//each digits[i] is the ith digit of the integer. The digits are ordered from
//most significant to least significant in left-to-right order. The large integer
//does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.

// Input: digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// Output: [6, 1, 4, 5, 3, 9, 0,1, 9, 5, 1, 8, 6, 7,0, 5, 5, 4, 4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

let inputArray = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 5];

function plusOne(inputArray) {
  let numberToString = "";
  let stringToNumber = [];
  let finalArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    numberToString += inputArray[i].toString();
  }

  stringToNumber = BigInt(numberToString);
  stringToNumber++;

  let inverse = stringToNumber.toString();

  for (let i = 0; i < inverse.length; i++) {
    finalArray.push(Number(inverse[i]));
  }
  return finalArray;
}
console.log("final array", plusOne(inputArray));
