//------------------( Array )---------------------------//
// why we use ??
// ans : They provide built-in functionalities that simplify common operations and improve code readability and maintainability.

// 1 . push 
/*The push() method is used to add an element at the end of an Array.
* As arrays in JavaScript are mutable objects, ( mutable objects are those whose state or value can be modified after they are created.)
* we can easily add or remove elements from the Array.*/
 let lang = ["java", "php","js"]
 lang.push("rubby")
 console.log(lang);  // output ["java", "php","js","rubby"]

// 2 . pop 
/* The pop() method is used to remove elements from the end of an array. */
let number1 = [1,2,3,4,5]
number1.pop();
console.log(number1);// ouput  [1,2,3,4]

// 3 . shift 
/* The shift() method is used to remove elements from the beginning of an array */
let number2 = [1,2,3,4,5]
number2.shift();
console.log(number2); // output [2,3,4,5]

// 4 . unshift 
/* The unshift() method is used to add elements to the front of an Array.*/
let number3 = [1,2,3,4,5]
number3.unshift();
console.log(number3);  /// output [1,2,3,4,5]

// 5 . lengh
/*
* The length property of an array returns the number of elements in the array.
* It automatically updates as elements are added or removed.
*/
let number = [1,2,3,4,5]
console.log(number.length); // output 5

// 6 . splice 
/* the splice() method is used to add, remove, or replace elements in an array. It modifies the original array and returns an array containing the removed elements (if any).:*/
let animals = ["dog", "cat", "fish", "bird"]
animals.splice(1,1 ,'bear')//array.splice(start, deleteCount, item1, item2, ..., itemN)
console.log(animals); // ["dog", "bear", "fish", "bird"]

// 7 . concat
/*
* The concat() method is used to concatenate two or more arrays and it gives the merged array.
*/
let number4 = [1,2,3,4,5]
let number5 =[6,7,8,9,0]
let combin =number4.concat(number5)
console.log(combin);// out put is [1,2,3,4,5,6,7,8,9,0]

// 8 . indexof 
/*The indexOf() method searches an array for an element value and returns its position.*/
let animals1 = ["dog", "cat", "fish", "bird"]
animals1.indexOf('cat')
console.log(animals1); // output is 1

//.9 include
/*Array.includes() to arrays. This allows us to check if an element is present in an array */
let test =["dog", "cat", "fish", "bird"]
let flag =test.includes('cat')
console.log(flag);// out put is true

//10 . foreach 
/* The forEach() method calls a function (a callback function) once for each array element.*/
let n = [1,2,3,4,5,6,7,8,9]
n.forEach((e) => {
    console.log(e);// output [1,2,3,4,5,6,7,8,9]
})

//11. slice 
/* , the slice() method is used to extract a portion of an array or string and returns a new array
* or string, without modifying the original one.*/
let pop = [1,2,3,4,5,6,7]
let newpop = pop.slice(0,5)//array.slice(start, end)
console.log(newpop); // [1,2,3,4,5]

//-----------------------( summary )---------------------------//

//--------------- Arrays operations -------------------//
// 1 . push (add element at end)
// 2 . pop   (remove element at end)
// 3 . shift  (remove element at front)
// 4 . unshift (add element at front)
// 5 . lenght  (check lenght)
// 6 . splice  (add and remove element at spefic place)
// 7 . concat  (combine the two array and make a new one)
// 8 . index  (check te index of array)
// 9 . include (find a specefic array)
//10 . foreach (print all elements)
//11 . slice (alterat an array)

// Q : what does the .(dot) do in javascript?
// Ans :  It allows you to access properties (data) or methods (functions) that belong to an object.