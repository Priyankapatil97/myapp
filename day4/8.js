
// clone the object

let std = { id:1,name:"priya"};

let std2 ={... std};

// clone the list

let list =["pune","mumbai","chennai"];

let list2 = [...list];

let list3 = [...list, "kashamir"];

console.log(list, list2, list3);