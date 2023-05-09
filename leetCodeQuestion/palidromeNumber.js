// WAP to check a given number is palindrome or not;

function checkPalidrome(originalNumber) {
  let reverseNum = 0;
  let tempOriginalNumber = originalNumber;
  while (tempOriginalNumber >0) {
    let lastDigit = tempOriginalNumber % 10;
    console.log("printing lastDigit", lastDigit);
    reverseNum = Math.trunc(reverseNum * 10 + lastDigit);
    console.log("printing reverseNum", reverseNum);
    tempOriginalNumber = Math.trunc(tempOriginalNumber / 10);
    console.log("printing tempOriginal Number", tempOriginalNumber);
  }
  if (originalNumber === reverseNum) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
checkPalidrome(121);
