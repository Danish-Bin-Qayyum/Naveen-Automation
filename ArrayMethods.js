// -------------------------( Importan Array Method )----------------------//
//1. every();
/* The every() method checks if all array values pass a test and return a boolean value*/
let num = [1,2,3,4,5];
let flag = num.every((e)=>e<10);
console.log(flag); // true

//2. some ()
/*The some() method checks if some array values pass a test and return a boolean value*/
let number = [1,2,3,4,5];
let fg = num.some((e)=>e% 2 === 0);
console.log(fg);// true

//2. find()
/*Returns the value of the first element in an array that pass a test*/
let total = [1,4,3,5,7,9,10,12]
let fe = total.find((e)=> e%2===0)
console.log(fe);// 2

//4. indexof():
/* The indexOf() method searches an array for an element value and returns its position.*/
let arry = ['apple','apple', 'orange','mango','pear']
let indexof_str = arry.indexOf('banana')
console.log("index of orange ", indexof_str ); // -1

// 5 lastindextof 
/*Array.lastIndexOf() is the same as Array.indexOf(),
* but returns the position of the last occurrence of the specified element.*/
let fruits = ['apple','apple' ,'banana','mango','pear']
let  lastapply = fruits.lastIndexOf('apple')
console.log(lastapply);// 1

//6. reverse();
/* revrse the array elements*/
let frts =['apple', 'banana','mango','pear']
let revfruite = frts.reverse();
console.log(revfruite);//['pear','mango','banana','apple']

//7. sort() 
/*The sort() method sorts an array alphabetically:*/
let products = ['macbook','imac','samsung', 'canon','123test']
let prosort = products.sort();
console.log(prosort);