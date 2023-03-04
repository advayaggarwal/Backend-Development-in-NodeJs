const f = function(){
    console.log("How much fun?");
}

f(); //How much fun?
fun();//ReferenceError, fun is not defined. fun is only accessible via f

/*
Function expression gets the scope of their corresponding variable in which they are assigned
*/