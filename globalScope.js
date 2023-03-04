// console.log(name); //ReferenceError in case of let, undefined in case of let
let name = 'Advay';

function fun(){
    console.log(name);
}

fun();
console.log(name);