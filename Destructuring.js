//-------------------------( Destructuring )---------------------------//
// --> Destructuring in JavaScript is a syntax that allows for extracting and unpacking 
// values from arrays or properties from objects into distinct variables
// --> 	Array Destructuring: Enables extracting elements from an 
// array and assigning them to individual variables based on their position.

const number =[1,2,3,4,5,6];// simply array
const [a,b,c,d,e,f] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
// output is [1,2,3,4,5,6]

//using spread operat 

const lang = ["java","python", "goto", "rudy"]
// extracting and unpacking values from arrays
const [p,q, ...testlang] = lang;// using two arrgument and rest array
console.log(p); //output java
console.log(q);// output python
console.log(testlang);// output [ "goto", "rudy"]

//object destructing 
const user = {
    firstname: "tom",
    lastname: "smith",
    age : 30 
}

const { firstname,lastname,age}= user;
 console.log(firstname);
 console.log(lastname);
 console.log(age);
// output is yon, smith ,30


 // with function parameter
 function prinusername({firstname,lastname}) {
    console.log(firstname + "" + lastname);
    
 }
  const person = { // 
    firstname: "jon",// creacting object properies
    lastname: " doe"
  }
  prinusername(person); // output is jon , doe