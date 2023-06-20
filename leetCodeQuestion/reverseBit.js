//WAP To Reverse Bit ;
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
        console.log("decimal",decimalVal);
    }
    if(Ans.length < 32)
    {
        for(let i=0;i<=32;i++)
        {
            if(i > Ans.length)
            {
                Ans.push(0);
            }
        }
        Ans.reverse();
    }
    else{
        Ans.reverse();
    }
    return Ans;
}
function binaryToDecimal(array)
{    
    let result=0
    let reverse = array;
    console.log("printng reverse array",reverse);
    for(let i=reverse.length-1;i>=0;i--)
    {
        result += Number(reverse[i]) * Math.pow(2,i);
        
    }
    console.log("result",result);
    return result;
}
console.log("print binary to decimal",binaryToDecimal(decimalToBinary(43261596)))