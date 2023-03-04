function* fetchNextElement(){
    console.log("I'm inside the generator function");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    yield 4;
}

const iter = fetchNextElement();