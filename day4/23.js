// 


let list =[1,2,3,4,5];

let output =[];

for (let i=0;i<list.length;i++)
{
    let item = list[i];
    let modifiedItem= item * item;
    output[i] = modifiedItem;

}

console .log(output);


// using Map function
let list =[1,2,3,4,5];
let output=list.map((item) => item * item);

console.log(output);


//ARROW FUNCTION

function sum() {}
() => {};