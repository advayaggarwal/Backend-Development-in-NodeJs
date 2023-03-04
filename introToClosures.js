function process() {
  let i = 0;
  function innerProcess() {
    i += 10;
    return i;
  }

  return innerProcess; //we are not calling the function we are just returning
}

let result = process(); //this line calls the function(process), which returns another function(innerProcess)
console.log(result);

console.log("First time calling result", result());
console.log("Second time calling result", result());
console.log("Third time calling result", result());

let object = { func: result }; //Storing it in an object, so that we can expand it in browser and see what all it contains

console.log(object);
