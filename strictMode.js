/*
    For reference 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

"use strict";

let content = "JS";
console.log(content);

student = "Advay"; //auto globals are not allowed in strict mode
console.log(student); //will give error due to strict mode