var teacher = "Sanket"; //global scope

function fun()
{
    var teacher = "Raj"; // function scope, this variable teacher is different from global variable teacher 
    console.log(teacher);
}

function gun()
{
    var student = "Advay"; //function scope
    console.log(student);
}

fun();
gun();

console.log(teacher);