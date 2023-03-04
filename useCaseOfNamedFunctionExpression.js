function fun(fn) {
  console.log("Welcome to fun");
  fn();
}

fun(function () {
  //Anonymous function expression, having readability problem
  console.log("Wow so much fun");
});

/*

1. Will not have readability problem like anonymous function has

2. It's difficult to use recursion in anonymous function exp
Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee

3. Difficult for developers to read logs using console.trace() 
*/
