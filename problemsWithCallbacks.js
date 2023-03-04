/*
 1. Inversion of control - what if the hof didn't call the callback that you were expecting it to
 2. Callback hell - callback inside a callback inside a callback ... Readability problem, hard to debug

 Reference - http://callbackhell.com/
*/

let arr = [1, 10, 1000, 9, 2, 3, 11];

arr.sort(function cmp(a, b){ //here we are sure that sort will call the cmp function i.e. callback
    return a-b;
});

function doTask(fn, x){
    //whole implementation is done by Team A
    fn(x*x); //calling my callback with square of x
    //Team A can call or not call callback, you are not sure how they are calling your callback
} 


//here Team B tries to use it
doTask(function exec(num){ //due to callback, I'm passing control of how exec should be called to doTask
    //this is inversion of control
    console.log("Woah num is ", num);
}, 10);

//Inversion of control - the control of your exec function (your implementation) on how this function should be called is passed to someone else
//Promise is the resolution to inversion of control