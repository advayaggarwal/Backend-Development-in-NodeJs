let count = 0;
let y = setInterval(function exec(){ //exec will run every 1 second
    count++;
    console.log(count);
    if(count > 15)  {
        clearInterval(y);
    }
}, 1000);


//setInterval will return an object having certain properties in NodeJS, but in chrome browser setInterval returns the id(number) for the setInterval