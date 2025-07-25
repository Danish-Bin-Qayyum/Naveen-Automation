 
 /*the map() function is an array method that creates a new array by
 * calling a provided function on every element in the original array.
 * .map() functio return  a new array
 * it work just like loop which exeract each element of array*/
 let number = [1,2,3] 
 let doublenumber = number.map((e)=> e*2)
 console.log(doublenumber); // output [2,4,6]


// 2. filter 
/*Array.prototype method used to create a new array containing all elements
* from the original array that satisfy a specified condition*/

let employee = [
    {name : "jhon", age: 30 , gender: "male"} ,
    {name : "bob", age: 35 , gender: "male"} ,
    {name : "danish", age: 40 , gender: "male"} ,
    {name : "priya", age: 34 , gender: "femal"} ,
    {name : "peter", age: 55 , gender: "femal"} ,
]
let femalemployee =employee.filter((emp)=> {
    return emp.gender === 'male'&& emp.age >30;
})
console.log(femalemployee);
// output  {name : "jhon", age: 30 , gender: "male"} ,
   //      {name : "bob", age: 35 , gender: "male"} ,

// another example
let num = [1,2,3,4,5,6,7,8,9,10]// creacting a array
let  evennum = num.filter((e)=> e% 2===0)//apply map function and call the function here
console.log(evennum);//[2,4,6,8,10]


//reduce
/* that processes each element in an array to produce a single output value. 
* rest parameters (...)
* used for infinit number of arguments*/
const sum = (...numbers) => numbers.reduce((acc,num)=> acc+num,);//rest parameter that allows you to collect an indefinite number of arguments into an array
                                                                  //-->  the accumulator is a value that accumulates (جمع کرنا) the result of the reducer 
const total = sum(1,2,3,4,5);

console.log(total);  // output 15 (add all the value)
