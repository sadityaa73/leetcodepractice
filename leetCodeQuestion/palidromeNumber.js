// WAP to check a given number is palindrome or not;

function checkPalidrome(originalNumber) {
  let reverseNum = 0;
  let tempOriginalNumber = originalNumber;
  while (tempOriginalNumber >0) {
    let lastDigit = tempOriginalNumber % 10;

    reverseNum = Math.trunc(reverseNum * 10 + lastDigit);

    tempOriginalNumber = Math.trunc(tempOriginalNumber / 10);
    
  }
  if (originalNumber === reverseNum) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
checkPalidrome(123);
