//WAP To Print the row of the Pascal triangle;

//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//Example:

// Input: rowIndex = 3
// Output: [1,3,3,1]

let numberOfRows = 3;
function pascalsTriangle(numberOfRow,numberOfRows) {
  let tempArray = [];
  for (let i = 0; i < numberOfRow; ++i) {
    tempArray.push(Array(i + 1));
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempArray[i][j] = 1;
      } else {
        console.log("value of j:-",j);
        tempArray[i][j] = tempArray[i-1][j-1] + tempArray[i-1][j];
      }
    }
  }
  return tempArray[numberOfRows];
}

console.log("pascalsTriangle", pascalsTriangle(numberOfRows+1,numberOfRows));
