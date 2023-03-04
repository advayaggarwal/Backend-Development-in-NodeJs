var teacher = "Sanket"; //global
function fun(){ //global
    console.log(teacher); //no error will be given, as var is function scoped, hoisting
    console.log(content); //ReferenceError, as let is block scoped
    var teacher = "Pulkit"; //scope of fun
    let content = "JS"; //content will be accessed only post declaration
    if(content == "JS"){
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
console.log(content); //ReferenceError