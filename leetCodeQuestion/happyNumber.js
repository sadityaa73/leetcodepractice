function isHappy(n)
{
  let number = n.toString().split("");
  let result = 0;
  console.log("number",number);
  for(let i = 0;i<number.length;i++)
  {
    result += Math.pow(number[i],2);
    console.log("result",result);
  }
  if(result !==1)
  {
    isHappy(result);
  }
  return true;
}

console.log("is happy",isHappy(19));