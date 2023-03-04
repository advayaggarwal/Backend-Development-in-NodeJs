var teacher = "Sanket"; //global scope

function fun() //global scope  
{
    var teacher = "Raj"; // function scope, this variable teacher is different from global variable teacher 
    content = "JS"; //autoglobals, scope is not allocated during parsing, will be allocated global scope during execution
    console.log(teacher);
}

function gun()
{
    var student = "Advay"; //function scope
    console.log(student);
}

// console.log(content); //ReferenceError, will get scope global during execution, as it will only be executed if fun() is executed, therefore can't access before fun() execution

fun();
gun();

console.log(teacher); 
console.log(content);

/*
Autoglobals -  if any variable is declared without using var, let or const. It will be given global scope during execution
               but not during parsing phase. i.e. it will not exist during parsing 
*/