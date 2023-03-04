function fun() { //fun -> global scope
  var x = 10; //x -> fun scope
  function gun() { // gun -> fun scope
    var y = 20; // y -> gun scope
    console.log(x); //10
    console.log(y); //20
  }
  gun();
  console.log(x); //10
  console.log(y); //ReferenceError
}

fun();

/*
We always go once step out each time until we find the variable in that scope.
If we don't find the variable even in global scope, JS will throw ReferenceError
Same thing happens in all the programming languages including C++
*/