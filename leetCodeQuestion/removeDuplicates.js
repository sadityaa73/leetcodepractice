//WAP to remove elemnets for a storted array;

let a =[0,1,1,1,2,2,3,3,4];

function loop()
{
    let ans =1;
    for(let i=1;i<a.length;++i){
        if(a[i]!=a[i-1]){
            a[ans]=a[i];
            ++ans;
        }
    }
    return ans;
}
console.log("@@ans",loop());