function getRandomINT(max) {
  //gives random number in the range [0, max)
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  //This will immediately return promise with pending state and value undefined as there is no sync code in executor and after the setTimeout is completed it will the promise will either be fulfilled or rejected
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function () {
      let num = getRandomINT(10);
      if (num % 2 == 0) {
        //if the random number is even we fulfill the promise
        resolve(num);
        console.log("Resolved");

        //Some code   -> this will also execute resolve(num) will not return from there
        //Some more code
        //resolve(10) -> resolving again, it will not do anything, once we reject or resolve, we can't change it, though we can call resolve() or reject() again, but it will not show any effect on promise object whatsoever
      } else {
        //if the random number is odd, we will reject the promise
        reject(num);
        console.log("Rejected");
      }
    }, 1000);

    console.log("Exiting the executor callback in the promise constructor");
  });
}

console.log("Starting...");
const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like... ", p);
console.log("Going to register my 1st set of handlers");

p.then(
  function fulfillHandler1(value) {
    console.log("Inside fulfillHandler 1 with value ", value);
    console.log("Promise after fulfillment is ", p);
    setTimeout(function t() {
      console.log("Ended 0s fulfillHandler1 timer");
    }, 0);
    console.log("Exiting the fulfillHandler1");
  },
  function rejectionHandler1(value) {
    console.log("Inside rejectionHandler 1 with value ", value);
    console.log("Promise after rejection is ", p);
    setTimeout(function t() {
      console.log("Ended 0s rejectionHandler1 timer");
    }, 0);
    console.log("Exiting the rejectionHandler1");
  }
);

console.log("Going to register my 2nd set of handlers");

p.then(
  function fulfillHandler2(value) {
    console.log("Inside fulfillHandler 2 with value ", value);
    console.log("Promise after fulfillment is ", p);
    console.log("Exiting the fulfillHandler2");
  },
  function rejectionHandler2(value) {
    console.log("Inside rejectionHandler 2 with value ", value);
    console.log("Promise after rejection is ", p);
    console.log("Exiting the rejectionHandler2");
  }
);

console.log("Ending...");

setTimeout(function () {
  console.log("Global timer of 1 sec");
}, 1000);


/*
.then() function returns a new promise object, it immediately returns a new promise object

*/