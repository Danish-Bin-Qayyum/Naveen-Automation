
//-------------------( Ways of Declaring in JavaScript  )--------------------------//

//1. function declarationt
function add() {
    return a+b
}

function print(params) {
    console.log("hello");
}

const sum = add(2,8)
console.log(sum);

//2.  function expression / anonymous function
const multiply = function(x,y) {
    return x*y
}
const mul = multiply(4,6);
console.log(mul);

//3. arrow function expression / anonymous function
// --> it is use an arguments
const divide = (t1,t2) => t1/t2;
const div = divide(34,567)
console.log(div);

//4. function constructor
const substruct = new Function('a', 'b','return a - b' )
const sub = substruct(3,1)
console.log(sub);

//5. IIFE( inmmediately invoked function expression)
// --> it will execut itself
// --> we do not need to execte it
// --> we do not need to call it
(function(){
    console.log("hello word");
})()

//6. generator function
// --> use two keyword function wildcard (function*) yield keyword
// --> the function that given the alterator objects and sequence number of value
// --> they are use in ES7 vergen of javascript
function* generatornumbersequence() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
}
const generatorn= generatornumbersequence();
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);

//7. annonymous function
// --> which have no specific name
// --> it is mostly use in call back function
const numbers = [1,2,3,4,5]
const sequencenumber =numbers.map((e) =>{
  return e*e;
})
console.log(sequencenumber);

//. recusive function
// --> the function that call itself during the execution
function  factorial(n) {
    if (n===0 || n===1) {
        return 1;
    }else{
        return n *  factorial(n-1)
    }
}
console.log(5);
console.log(3);
console.log(50);

// 9. higher oder function
function addition(a,b) {
    return a+b;
}
function operator(funName,a,b) {
    funName(a,b)
}
const s = operator(addition,3,7)
console.log(s);





