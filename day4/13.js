// Function with Parameter Having Default

function sum(n1=0,n2=0) 
{
    let output = n1 + n2;
    return output;
}

// with 0 param
let t1 = sum();
console.log(t1);

let t2 = sum(10);
console.log(t2);
//with 2 param
let t3 = sum(10,20);
console.log(t3);