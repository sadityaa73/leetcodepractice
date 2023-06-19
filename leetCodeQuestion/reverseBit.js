//WAP To Reverse Bit ;

let Bit = "00000010100101000001111010011100";

function binaryToDecimal(n)
{    
    let result=0
    let reverse = n;
    for(let i=reverse.length-1;i>=0;i--)
    {
        result += Number(reverse[i]) * Math.pow(2,i);
        
    }
    console.log("result",result);
    return result;
}

function decimalToBinary(n)
{
    let decimalVal= n;
    let divider = 2;
    let result ="";
    let Ans=[];
    while(decimalVal > 0)
    {
        result = decimalVal/divider;
        Ans.push(decimalVal%divider);
        decimalVal =Math.trunc(result);
        console.log(decimalVal);
    }
    Ans.reverse();
    return Ans;
}

console.log(decimalToBinary(binaryToDecimal(Bit)));