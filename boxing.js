/*
Boxing means when primitive data type gets converted to non-primitive type (object) momentarily
i.e. Wrapping a primitive value in an Object 
*/

// console.log(1.toString()); //will give error because only object(non-primitive data type) contains toString() function
console.log((1).toString()); //does not give error due to manual boxing. 1 got converted to Number(1) object

console.log("advay".toString()); //does not give error though 'advay' is a string not an object. Why? Due to boxing
  
let x = 1;
console.log(x.toString()); //first converts x to an object using auto boxing then applies the toString method

console.log(1..toString()); //Manual boxing

/*

A '.' after a number might seem ambiguous. Is it a decimal or an object member operator(.)?

However, the interpreter decides that it's a decimal, so you're missing the member operator.

It sees it as this:

(10.)toString();  // invalid syntax
When you include the second ., you have a decimal followed by the member operator.

(10.).toString();

For reference - 
https://stackoverflow.com/questions/13149282/why-does-10-tostring-work-but-10-tostring-does-not

*/