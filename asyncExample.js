function timeConsumingByLoop(){
    console.log("Loop starts");
    for(let i = 0; i< 10000000; i++){
        //some task
    }
    console.log("Loop ends");
}
function timeConsumingByRuntimeFeature0(){
    console.log("Starting timer0");
    setTimeout(function exec(){
        console.log("Completed the timer0");
        for(let i=0; i<10000000; i++){
            //some task
        }
    }, 5000); //5 sec timer
}
function timeConsumingByRuntimeFeature1() {
  console.log("Starting timer1");
  setTimeout(function exec() {
    console.log("Completed the timer1");
  }, 0); //0 sec timer
}
function timeConsumingByRuntimeFeature2() {
  console.log("Starting timer2");
  setTimeout(function exec() {
    console.log("Completed the timer2");
  }, 200); //200 ms timer
}
console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("bye");