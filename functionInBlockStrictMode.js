"use strict";

{
    function fun(){
        return "123";
    }
}

console.log(fun); // in strict mode fun is not accessible, will only be accessible inside the block

/*
    Function gets either fucntion scope or global scope. It will not have block scope, but in strict mode
    function will not get the global scope
*/