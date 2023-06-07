//WAP To return first rows of pascal triangle:

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above
//  it as shown:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
function pascalTriangle(numberOfRows) {
    var tempArray = [];
  for (let i = 0; i < numberOfRows; ++i) {
    tempArray.push(Array(i+1))
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempArray[i][j] = 1;
      }
      else{
           tempArray[i][j] = tempArray[i - 1][j - 1] + tempArray[i - 1][j];;
        }
    }
  }
  return tempArray;
}
console.log(pascalTriangle(5));

