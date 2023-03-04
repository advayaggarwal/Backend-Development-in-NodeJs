function fun()
{
    var x = 10; //var gives the function scope, x can only be accessed inside this function even above declaration
}

console.log(x); //ReferenceError, not accessible here

function gun()
{
    console.log(y); //hoisting, y is accessible here
    var y = 10; //var gives the function scope, so y can be accessed inside the function even before the declaration
}

function sun()
{
    console.log(z); //ReferenceError, not accessible here
    let z = 10; //let gives the block scope, function block is also a block {}, so z can be accessed inside the function but only after the declaration
}

gun();

/*
Function scope - accessible inside the function even before the declaration
var gives the function or global scope
*/