let std1 = {id:1 ,name: "priyanka" ,email:"priya@gmail.com"};

console.log(std1);

//  clone : (very important from react) we want to use clone to duplicate a object

let std3={...std1 , id:2};  //... means is extending 

console.log(std3);
