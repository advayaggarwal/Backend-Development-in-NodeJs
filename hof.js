//higher order functions - functions that take other functions as argument, example sort

function f(x, fn){
    // x -> number, fn -> function

    console.log(x);
    console.log(fn);
    fn();
}

f(10, function exec(){
    console.log("I'm an expression passed to a HOF");
});


let arr = [10, 4, 30, 2, 1]; //unsorted array
arr.sort(); //it sorts the given array //[expectation] -> it might sort the array in increasing order
//default implementation of arr.sort() is going to sort the array in lexicographical order
/*
 0 -> A
 1 -> B
 2 -> C
 3 -> D
 4 -> E
 5 -> F
 6 -> G
 7 -> H
 8 -> I
 9 -> J

 arr = [BA, E, DA, C, B]
 arr.sort(), now arr = [B, BA, C, DA, E] => [1, 10, 2, 30, 4]
*/
console.log(arr);

let b = [10, 4, 30, 2, 1];
//Sort b in increasing order
b.sort(function cmp(a, b){
  //if a < b ,then a-b will be negative -> if cmp function gives negative then a is placed before b
  //else if a > b, then a-b will be positive -> if cmp function gives positive then b is placed before a
  return a - b;
}); //sort is a HOF, the sort function takes a comparator function as argument

console.log(b);