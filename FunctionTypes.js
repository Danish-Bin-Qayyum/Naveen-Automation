
//-------------------( Ways of Declaring in JavaScript  )--------------------------//

// difinition :  a function is a block of reusable code designed to perform a specific task. It can take inputs (parameters), process them, and optionally return an output. 
// --> use for Code Reusability:
//1. function declarationt
function add(a,b) {
    return a+b
}
console.log(add(4,5)); // output is 9

function print() {
    console.log("hello");
}
print() // out out ( hello)

const sum = add(2,8)
console.log(sum);// output ( 10)

//2.  function expression / anonymous function
// -->  that is defined without a name or identifier. 
// -->  anonymous functions are typically used in contexts where a function is needed for a single, 
// immediate purpose and does not require reusability by name.
const multiply = function(x,y) {
    return x*y
}
const mul = multiply(4,6);
console.log(mul);// out put ( 24 )

//3. arrow function expression / anonymous function
// --> it is use an arguments
const divide = (t1,t2) => t1/t2;
const div = divide(24,6)
console.log(div);// output ( 4 )

//4. function constructor
const substruct = new Function('a', 'b','return a - b' )// there are using backtick( backtick give access to use variabe and value between the string without any concatition)
const sub = substruct(3,1)                              // we can use return keyword as a arrguments
console.log(sub); // output  2

//5. IIFE( why we use backticks in javascript)
// --> it will execut itself ( )
// --> we do not need to execte it
// --> we do not need to call it
// --> Create a Private Scope (IIFEs help prevent variables from leaking into the global scope)
// --> One-Time Initialization:
(function(){
    console.log("hello word");
})() // output " hello word"

//6. generator function
// definition : A generator function is a special type of function that can pause its execution at any point and resume later.
// --> use two keyword function wildcard (function*) yield keyword
// --> the function that given the alterator objects and sequence number of value
// --> they are use in ES7 vergen of javascript
function* generatornumbersequence() {  // (condusing ????)
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
}
const generatorn= generatornumbersequence();
console.log(generatorn.next().value); // there are run with number of calling
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);
console.log(generatorn.next().value);

//7. annonymous function
// --> which have no specific name
// --> it is mostly use in call back function
const numbers = [1,2,3,4,5]
const sequencenumber =numbers.map((e) =>{// purpose of .map() is to create a new array by transforming each element of an existing array.
  return e*e;                          // .map() functio run again and again ( callback) with array and give us a new array
})
console.log(sequencenumber);// output ( 1,4,9,16,25)

//. recusive function
// --> the function that call itself during the execution is called a recursive function.
function  factorial(n) {
    if (n===0 || n===1) {
        return 1;
    }else{
        return n *  factorial(n-1)
    }
 }// 
console.log(factorial(6)); // output 720 (1*2*3*4*5*6)
//console.log(3);
//console.log(50);


// confusesd ???
// 9. higher oder function
function addition(a,b) {
    return a+b;
}
function operator(funName,a,b) {
    funName(a,b)
}
const s = operator(addition,3,7)
console.log(s);





