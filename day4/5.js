let list=["delhi","Mumbai" ,"pune" ,"chennai"];

let size = list.length;
console.log(size);

//Access the Element From Array
 let city = list[1];
 console.log(city);

 // Iterate all the elements of the list;

 for(let i=0;i<list.length;i++)
 {
     let local= list[i];
     console.log(local);
 }

 for (let item of list)
 {
     console.log(item);
 }


 //lterate all approach 3 :: using lamda known as arrow funaction

 list.forEach((item) => console.log(item));