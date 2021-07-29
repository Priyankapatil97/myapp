let list =["Dehli","Calcutta","pune"];

for(let i=0;i< list.length;i++)
{
    let item = list[i];
    console.log(item);
}

//approach 2

for(let item of list)
{
    console.log(item);
}

// approach 3

list.forEach((item)=> console.log(item));

list.forEach((item) => console.log(item)); // arrow function


