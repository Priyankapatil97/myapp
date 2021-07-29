// callback funcation

function myfunc(p1)
{
    console.log(typeof p1);
}

myfunc();

myfunc(100);

myfunc(99.99);

myfunc("priyanka");

myfunc({});

myfunc([]);

myfunc(function () {}); // FUNCTION IS ACCEPTING ANOTHER FUNCTION AS A PARAMETER :: CALLBACK;

//read(1,{},function(){});