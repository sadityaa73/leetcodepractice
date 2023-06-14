//WAP To Find First element to occur k times;

//Given an array of N integers. Find the first element that occurs at least K number of times.

//Example:

// Input :
// N = 7, K = 2
// A[] = {1, 7, 4, 3, 4, 8, 7}
// Output :
// 4

let A = [4, 2, 2, 2, 3, 3, 4, 4, 4, 2];
let N = 10;
let K = 3;
function repeatingElements(A, N, K) {
  let indexs = new Map();
  let indexs2 = new Map();
  let result1 = "";
  let result2 = "";
  if (A.length < K) return -1;
  for (let i = 0; i < N; i++) {
    let count = 0;
    let tempArr = A[i];
    for (let j = 0; j < N; j++) {
      if (A[j] === tempArr) {
        count++;
      }
    }

    if (count === K) {
      indexs.set(`${tempArr}`, i);

      result1 = getKeys(indexs, Math.min(...indexs.values()));
    }
    if (count >= K) {
      indexs2.set(`${tempArr}`, i);

      result2 = getKeys(indexs2, Math.max(...indexs2.values()));
    }
  }
  function getKeys(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue) {
        return key;
      }
    }
  }

  return result2 ? result2 : result1 ? result1 : -1;
}

console.log("repeated element:-", repeatingElements(A, N, K));
