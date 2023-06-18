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
