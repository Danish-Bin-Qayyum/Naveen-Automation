//-------------------------( Destructuring )---------------------------//
// --> Destructuring in JavaScript is a syntax that allows for extracting and unpacking 
// values from arrays or properties from objects into distinct variables
// --> 	Array Destructuring: Enables extracting elements from an 
// array and assigning them to individual variables based on their position.

const number =[1,2,3,4,5,6];
const [a,b,c,d,e,f] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//using spread operat

const lang = ["java","python", "goto", "rudy"]
const [p,q, ...testlang] = lang;
console.log(p);
console.log(q);
console.log(testlang);

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
 console.log(firstname);


 // with function parameter
 function prinusername({firstname,lastname}) {
    console.log(firstname + "" + lastname);
    
 }
  const person = {
    firstname: "jon",
    lastname: " doe"
  }
  prinusername(person);