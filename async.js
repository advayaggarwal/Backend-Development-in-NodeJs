console.log("hello");

setTimeout(function(){
    console.log("Timer ends");
}, 0);

console.log("end");

/*
Here JS will not wait for setTimeout to finish the execution even though the timer is for 0 seconds, as setTimeout is async code and is provided by the runtime and not native to the JS (ecmascript).
*/