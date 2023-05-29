// WAP To know how recursion works:

function factorial(n)
{
    if(n===0)
    return 1;

    let result = n*factorial(n-1);
    console.log(result);
    return result;
}

console.log(`factorial of`,factorial(6));