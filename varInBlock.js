function fun(){
    var i = 5;
    while(i < 10)
    {
        var x = i; //x will get the scope of fun, as var has function or global scope, so we can ignore the block
        //ignoring the while block it's inside the function fun, so it will get the scope of fun
        i++;
    }

    console.log(x); 
}

fun();
var i = 0;
while(i < 5){
  var y = 10; //y will get global scope, as var has function or global scope, so we can ignore the block
  //ignoring the while block it's inside the global scope, so it will get the global scope
  i++;
}

console.log(y);