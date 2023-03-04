function createPromise() {
  return new Promise(function (resolve, reject) {
    console.log("Resolving the promise");
    resolve("Done");
  });
}

setTimeout(function f() {
  console.log("Timer completed");
}, 0);

let p = createPromise();

p.then(
  function fulfillHandler1(value) {
    console.log("We fulfilled1 with a value ", value);
  },
  function rejectionHandler(value) {}
);

p.then(
  function fulfillHandler2(value) {
    console.log("We fulfilled2 with a value ", value);
  },
  function rejectionHandler(value) {}
);

p.then(
  function fulfillHandler3(value) {
    console.log("We fulfilled3 with a value ", value);
  },
  function rejectionHandler(value) {}
);

console.log("Ending");

/*
Microtask Queue will get preference over Callback Queue
So fulfillHandlers siting inside Microtask queue will get preference over setTimeout function f siting inside 
Callback queue

So fullFillHandlers will be called first before calling f
*/
