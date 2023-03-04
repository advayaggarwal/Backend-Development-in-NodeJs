function getRandomINT(max) {
  //gives random number in the range [0, max)
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  //This will not immediately return the promise as there is sync code in executor and after sometime it will return promise with either fulfilled or rejected state
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 10000000000; i++) {}
    let num = getRandomINT(10);

    if (num % 2 == 0) {
      //if the random number is even we fulfill the promise
      resolve(num);
    } else {
      //if the random number is odd, we will reject the promise
      reject(num);
    }
  });
}

function createPromiseWithTimeout() {
  //This will immediately return promise with pending state and value undefined as there is no sync code in executor and after the setTimeout is completed it will the promise will either be fulfilled or rejected
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomINT(10);
      if (num % 2 == 0) {
        //if the random number is even we fulfill the promise
        resolve(num);

        //Some code   -> this will also execute resolve(num) will not return from there
        //Some more code
        //resolve(10) -> resolving again, it will not do anything, once we reject or resolve, we can't change it, though we can call resolve() or reject() again, but it will not show any effect on promise object whatsoever
      } else {
        //if the random number is odd, we will reject the promise
        reject(num);
      }
    }, 10000);
  });
}

// let x = createPromiseWithLoop();
let y = createPromiseWithTimeout();
console.log(y);
