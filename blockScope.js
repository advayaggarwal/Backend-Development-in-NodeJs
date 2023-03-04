{
    var x = 10; //var is not block scoped so x is global here
}

console.log(x);


{
    let y = 10; //let is block scoped, so y can only be accessed inside this block after declaration
}

console.log(y); //ReferenceError

/*
Block scope - accessible inside the block after the declaration
let gives the block scope
*/