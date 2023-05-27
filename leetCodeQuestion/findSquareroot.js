//WAP To Given a non-negative integer x, return the square root of x rounded down 
// to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.


let val =8;

function squareRoot(x)
{
  let final = Math.floor(Math.sqrt(x));
  return final;
}

console.log("printing squrae root",squareRoot(val));


