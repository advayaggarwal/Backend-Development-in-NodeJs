let x = -0;
console.log(x === 0); //by this comparison we can't differentiate between  0 and -0
console.log(x < 0); //false

console.log(String(x)); //converts -0 to 0 in string conversion

console.log(Object.is(x, -0)); //true
console.log(Object.is(x, 0)); //false 

console.log(Math.sign(-3)); // -1, this function gives you the sign of the number, except for 0 and -0
console.log(Math.sign(2)); // 1

console.log(Math.sign(-0)); // -0
console.log(Math.sign(0)); // 0

//Write a custom function that gives us the sign of number properly, expected -1, 1 

function findSign(x) //only for non NaN values
{
    let sign =  Math.sign(x);
    if(sign == -1 || Object.is(sign, -0))  return -1;
    else  return 1;
}

console.log(findSign(-0), findSign(0), findSign(2), findSign(-3), findSign(NaN));