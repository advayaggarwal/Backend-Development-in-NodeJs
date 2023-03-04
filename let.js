let x = 1;

if(x == 1)
{
    let x = 2; //this local x is different from the above x. let has the block scope
    console.log(x); //2
}

console.log(x); //1