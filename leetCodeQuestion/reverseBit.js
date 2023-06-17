//WAP To Reverse Bit ;

let Bit = "11111111111111111111111111111101";

function binaryToDecimal(n)
{    
    let result=0
    let reverse = n;
    for(let i=reverse.length-1;i>=0;i--)
    {
        result += Number(reverse[i]) * Math.pow(2,i);
        
    }
    return result;
}

// console.log("reverse bit binary to decimal:",binaryToDecimal(Bit));
console.log(32/2);
function decimalToBinary(n)
{
    console.log("called");
   let number =n;
   let quotient =0;
   let divider = 2;
   let result =[];
   while(divider < quotient)
   {
    result.push(number%divider);
    number = number/divider;
    console.log(number);
    quotient = number;
    console.log(quotient);
   }
   return result.reverse();
}
console.log(decimalToBinary(40));