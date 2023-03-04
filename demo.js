function fun() //global scope  
{
    function gun()
    {
        content = "C";
    }
    gun();
    
}

fun();
console.log(content);