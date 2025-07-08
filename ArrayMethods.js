// -------------------------( Importan Array Method )----------------------//
//1. every(); it check the every element in array if the condition is pass then give us boolean value
let num = [1,2,3,4,5];
let flag = num.every((e)=>e<10);
console.log(flag); // true

//2. some ()it check the ateast one  element in array if the condition is pass then give us boolean value
let number = [1,2,3,4,5];
let fg = num.some((e)=>e% 2 === 0);
console.log(fg);// true

//2. find(); it check the first element in array if the condition is pass then give us boolean value
let total = [1,4,3,5,7,9,10,12]
let fe = total.find((e)=> e%2===0)
console.log(fe);// 2

//4. indexof():give index of element 
let arry = ['apple','apple', 'orange','mango','pear']
let indexof_str = arry.indexOf('banana')
console.log("index of orange ", indexof_str ); // -1

// 5 lastindextof , give the last index of  given element 
let fruits = ['apple','apple' ,'banana','mango','pear']
let  lastapply = fruits.lastIndexOf('apple')
console.log(lastapply);// 1

//6. reverse(); revrse the array element
let frts =['apple', 'banana','mango','pear']
let revfruite = frts.reverse();
console.log(revfruite);//['pear','mango','banana','apple']

//7. sort() sort the element alphabetical
let products = ['macbook','imac','samsung', 'canon','123test']
let prosort = products.sort();
console.log(prosort);