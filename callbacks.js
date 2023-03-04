/** 
* fun -> HOF ? -> it takes function fn as an argument
* x -> number
* fn -> function
* exec -> callback function
*/

function fun(x, fn){
    for(let i =0; i<x; i++){
        console.log(i);
    }

    fn();
}

fun(10, function exec(){ //callback
    console.log("I'm executed also");
});