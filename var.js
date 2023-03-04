var x = 1;

if(x == 1)
{
    var x = 2; //this x is same as the above x. var doesn't have block scope so it will make it to the nearest
    //function or global scoped i.e. by seeing 1-1 scope out, there is no function here, so it make it global
    console.log(x); //2
}

console.log(x); //2 