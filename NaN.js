console.log(Number("123"));
console.log(Number("Advay"));

let x = NaN;
console.log(x == NaN);
console.log(isNaN(x));

console.log(isNaN("Advay")); //isNaN converts the input to a number - coercion, returns true

console.log(Number.isNaN("Advay"));  // no coercion takes place, returns false

//how to check Number.isNaN() by writing our own function
if(typeof(x) == 'number' && x !== x) // only NaN !== NaN
{
    console.log(true);
}

console.log(x !== x); //is there any problem with this expression to check NaN value ?